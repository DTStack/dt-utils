/**
 * IndexedDB
 *
 * @deprecated
 * @category Storage
 * @description
 * This class provides a wrapper for IndexedDB, a low-level API for client-side storage of significant amounts of structured data, including files/blobs.
 * It allows you to store and retrieve data in a structured format, and to query and manipulate that data using a variety of methods.
 *
 * @example
 * ```typescript
 * import { LocalIndexedDB } from 'dt-utils';
 *
 * // Initialize database
 * const db = new LocalIndexedDB('userDB', 1, 'users');
 * await db.open();
 *
 * // Add data
 * await db.add('user1', { name: 'John', age: 30 });
 *
 * // Get data
 * const user = await db.get('user1');
 *
 * // Update data
 * await db.set('user1', { name: 'John', age: 31 });
 *
 * // Delete data
 * await db.delete('user1');
 *
 * // Clear all data
 * await db.clear();
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB|MDN IndexedDB Usage Guide}
 * @see {@link https://caniuse.com/#feat=indexeddb|Browser Compatibility}
 */
class IndexedDB {
    private _db!: IDBDatabase;
    private _version!: number;
    private _database!: string;
    private _storeName!: string;
    private _openLog!: boolean;

    /**
     * Constructor for a new indexedDB object
     * @param database Database name
     * @param version Database version
     * @param storeName Store object name
     * @param openLog Whether to log indexedDB changes
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
     * Open the database indicated in the constructor function.
     * This method returns a Promise that resolves to the db instance.
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

    public async add<T>(key: string, value: T): Promise<IDBRequest> {
        await this.ensureConnection();
        return this.executeStoreOperation((store) => store.add(value, key));
    }

    public async set<T>(key: string, value: T): Promise<IDBRequest> {
        await this.ensureConnection();
        this.log('IndexedDB set', key, value);
        return this.executeStoreOperation((store) => store.put(value, key));
    }

    public async get<T>(key: string): Promise<T> {
        await this.ensureConnection();
        this.log('IndexedDB get', key);
        return this.executeStoreOperation<T>((store) => store.get(key));
    }

    public async delete(key: string): Promise<IDBRequest> {
        await this.ensureConnection();
        return this.executeStoreOperation((store) => store.delete(key));
    }

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
