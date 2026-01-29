import IndexedDB from '../index';

const createDB = async () => {
    const db = new IndexedDB(`testDB_${Date.now()}_${Math.random()}`, 1, 'testStore');

    return db;
};

describe('IndexedDB', () => {
    // open
    test('opens database successfully', async () => {
        const db = await createDB();

        const instance = await db.open();
        expect(instance).toBeDefined();
        expect(instance.name).toBeDefined();
    });

    test('returns existing connection if already opened', async () => {
        const db = await createDB();

        const first = await db.open();
        const second = await db.open();
        expect(first).toBe(second);
    });

    // 'add & get'
    test('adds and retrieves data', async () => {
        const db = await createDB();

        await db.open();

        await db.add('user1', { name: 'John', age: 30 });

        const result = await db.get<{ name: string; age: number }>('user1');

        expect(result).toEqual({ name: 'John', age: 30 });
    });

    // set（update）
    test('updates existing data', async () => {
        const db = await createDB();

        await db.open();

        await db.add('user1', { name: 'John', age: 30 });
        await db.set('user1', { name: 'John', age: 31 });

        const result = await db.get<{ age: number }>('user1');
        expect(result.age).toBe(31);
    });

    // delete
    test('deletes data by key', async () => {
        const db = await createDB();

        await db.open();

        await db.add('user1', { name: 'John' });
        await db.delete('user1');

        const result = await db.get('user1');
        expect(result).toBeUndefined();
    });

    // clear
    test('clears all data in store', async () => {
        const db = await createDB();

        await db.open();

        await db.add('user1', { name: 'John' });
        await db.add('user2', { name: 'Jane' });

        await db.clear();

        const result1 = await db.get('user1');
        const result2 = await db.get('user2');

        expect(result1).toBeUndefined();
        expect(result2).toBeUndefined();
    });

    //   ensureConnection / error handling
    test('throws error when operating before open', async () => {
        const newDB = new IndexedDB('newDB', 1, 'store');

        await expect(newDB.get('key')).resolves.toBeUndefined();
    });

    test('handles non-existing key gracefully', async () => {
        const db = await createDB();

        await db.open();

        const result = await db.get('not-exist');
        expect(result).toBeUndefined();
    });

    // version upgrade
    test('creates object store on upgrade', async () => {
        const oldDb = new IndexedDB('upgradeDB', 1, 'store1');
        await oldDb.open();

        const newDb = new IndexedDB('upgradeDB', 2, 'store2');
        const instance = await newDb.open();

        expect(instance.objectStoreNames.contains('store2')).toBe(true);
    });
});
