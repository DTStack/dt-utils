/**
 * IndexedDB
 *
 * @deprecated
 * @category Storage
 * @description
 * 这个类为 IndexedDB 提供了一个包装器，IndexedDB 是一个用于客户端存储大量结构化数据（包括文件/二进制对象）的 API。
 * 它允许你以结构化格式存储和检索数据，并使用各种方法查询和操作这些数据。
 *
 * @Methods
 * | 方法名 | 描述 | 参数 | 返回值 |
 * |------|------|------|--------|
 * | `open` | 打开数据库连接 | — | `Promise<IDBDatabase>` |
 * | `add` | 添加一个新的键值对到对象存储中 | `key: IDBValidKey` <br> `value: any` | `Promise<void>` |
 * | `set` | 更新对象存储中已存在的键值对 | `key: IDBValidKey` <br> `value: any` | `Promise<void>` |
 * | `get` | 从对象存储中检索指定键的值 | `key: IDBValidKey` | `Promise<any>` |
 * | `delete` | 从对象存储中删除指定键对应的数据 | `key: IDBValidKey` | `Promise<void>` |
 * | `clear` | 清空对象存储中的所有数据 | — | `Promise<void>` |
 *
 * @example
 * ```typescript
 * import { IndexedDB } from 'dt-utils';
 *
 * // 初始化数据库
 * const db = new IndexedDB('userDB', 1, 'users');
 * await db.open();
 *
 * // 添加数据
 * await db.add('user1', { name: 'John', age: 30 });
 *
 * // 获取数据
 * const user = await db.get('user1');
 *
 * // 更新数据
 * await db.set('user1', { name: 'John', age: 31 });
 *
 * // 删除数据
 * await db.delete('user1');
 *
 * // 清空所有数据
 * await db.clear();
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB | MDN IndexedDB 使用指南}
 * @see {@link https://caniuse.com/#feat=indexeddb | 浏览器兼容性}
 */
class IndexedDB {
    private _db!: IDBDatabase;
    private _version!: number;
    private _database!: string;
    private _storeName!: string;
    private _openLog!: boolean;

    /**
     * 创建一个新的 IndexedDB 对象
     * @param database 数据库名称
     * @param version 数据库版本
     * @param storeName 对象存储名称
     * @param openLog 是否记录 IndexedDB 的变更日志
     */
    constructor(database: string, version: number, storeName: string, openLog = false) {
        if (!this.checkBrowserSupport()) {
            console.error("This browser doesn't support IndexedDB");
            return;
        }
        this._storeName = storeName;
        this._version = version;
        this._database = database;
        this._openLog = openLog;
    }

    private checkBrowserSupport(): boolean {
        return 'indexedDB' in window;
    }

    /**
     * @hidden
     * 打开在构造函数中指定的数据库。
     * 此方法返回一个 Promise，解析为数据库实例。
     */
    public async open(): Promise<IDBDatabase> {
        if (this._db) {
            return this._db;
        }

        try {
            this._db = await this.createConnection();
            return this._db;
        } catch (error) {
            this.log('Failed to open database:', error);
            throw error;
        }
    }

    private createConnection(): Promise<IDBDatabase> {
        return new Promise<IDBDatabase>((resolve, reject) => {
            /**
             * If exist the same version database, there need upgrade an new version database,
             * because of the same version can't trigger onupgradeneeded event which will occur
             * object stores was not found exception.
             */
            const request = window.indexedDB.open(this._database, this._version);

            request.onsuccess = () => {
                this._db = request.result;
                this.setupVersionChangeHandler();
                this.log('Open indexedDB success!');
                resolve(this._db);
            };

            request.onupgradeneeded = (event) => {
                this._db = request.result;
                this.handleUpgrade(event, request, resolve);
            };

            request.onblocked = (event) => {
                this.log('Database open blocked', event);
                reject(new Error('Database open blocked'));
            };

            request.onerror = (event) => {
                this.log('Maybe you not allow my web app to use IndexedDB!', event);
                reject(event);
            };
        });
    }

    private handleUpgrade(
        event: IDBVersionChangeEvent,
        request: IDBOpenDBRequest,
        resolve: (value: IDBDatabase) => void
    ): void {
        if (!this._db.objectStoreNames.contains(this._storeName)) {
            const objectStore = this._db.createObjectStore(this._storeName);
            objectStore.transaction.oncomplete = () => {
                resolve(request.result);
            };
        }
        this.log('Database Upgraded', event);
    }

    private setupVersionChangeHandler(): void {
        this._db.onversionchange = (event) => {
            this.log('Database version changed', event);
            // Close database connection to avoid blocking upgrade operations in other tabs
            this._db.close();
            this._db = null as any;
        };
    }

    private createTransactionStore(storeName: string, mode: IDBTransactionMode): IDBObjectStore {
        if (!this._db) {
            throw new Error('Database not connected, please call open() method first');
        }
        const transaction = this._db.transaction([storeName], mode);

        return transaction.objectStore(storeName);
    }

    /** @hidden */
    public async add<T>(key: string, value: T): Promise<IDBRequest> {
        await this.ensureConnection();
        return this.executeStoreOperation((store) => store.add(value, key));
    }

    /** @hidden */
    public async set<T>(key: string, value: T): Promise<IDBRequest> {
        await this.ensureConnection();
        this.log('IndexedDB set', key, value);
        return this.executeStoreOperation((store) => store.put(value, key));
    }

    /** @hidden */
    public async get<T>(key: string): Promise<T> {
        await this.ensureConnection();
        this.log('IndexedDB get', key);
        return this.executeStoreOperation<T>((store) => store.get(key));
    }

    /** @hidden */
    public async delete(key: string): Promise<IDBRequest> {
        await this.ensureConnection();
        return this.executeStoreOperation((store) => store.delete(key));
    }

    /** @hidden */
    public async clear(): Promise<IDBRequest> {
        await this.ensureConnection();
        return this.executeStoreOperation((store) => store.clear());
    }

    private async ensureConnection(): Promise<void> {
        if (!this._db) {
            await this.open();
        }
    }

    private executeStoreOperation<T>(operate: (store: IDBObjectStore) => IDBRequest): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                const store = this.createTransactionStore(this._storeName, 'readwrite');
                const request = operate(store);

                request.onsuccess = () => resolve(request.result);
                request.onerror = (event) => {
                    this.log('Store operation error:', event);
                    reject(event);
                };
            } catch (error) {
                this.log('Error during store operation:', error);
                reject(error);
            }
        });
    }

    private log(...args: any[]): void {
        if (this._openLog) {
            console.log(`[IndexedDB ${this._database}]`, ...args);
        }
    }
}

export default IndexedDB;
