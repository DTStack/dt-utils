# indexedDb

````js
  import { LocalIndexedDB } from '@dtinsight/dt-utils'
````
**基本概念**
IndexedDB是实现数据持久存储在用户浏览器中的方法。因为它使您可以创建具有丰富查询功能的Web应用程序，而不管网络是否可用，所以这些应用程序可以联机和脱机运行。LocalIndexedDB对于存储大量数据的应用程序（例如，借阅库中的DVD目录）和不需要持久的Internet连接即可工作的应用程序（例如，邮件客户端，任务列表和记事本）

### 基本模式
> LocalIndexedDB方法实现的基本模式分为5点
+ 打开一个数据库。
+ 在数据库中创建一个对象存储。 
+ 启动一个事务并请求执行一些数据库操作，例如添加或检索数据。
+ 通过侦听正确的DOM事件来等待操作完成。
+ 对结果做一些事情（可以在请求对象上找到）。

## open
该方法实现打开一个数据库，返回一个promise对象

我们开始整个过程是这样的：
### 打开数据库
```js
const request = LocalIndexedDB.open(数据库名, 数据库版本);
```
该open()函数的调用将返回一个IDBOpenDBRequest对象，open函数的结果是一个实例 IDBDatabase
### 生成处理程序
该对象具有您作为事件处理的结果（成功）或错误值。IndexedDB中的大多数其他异步函数执行相同的操作-返回IDBRequest 带有结果或错误的对象，然后我们处理一下错误。
```js
request.onsuccess = function(event) {
  // Do something with request.result!
};
request.onupgradeneeded = function(evevt) {
 // 当创建新数据库或增加现有数据库的版本号
}
request.onblocked = function(event) {
  // 当open()使用比数据库的实际版本更高的版本进行调用时，所有其他打开的数据库必须先明确确认该请求，然后才能开始对数据库进行更改
};
request.onerror = function(event) {
  // Do something with request.errorCode!
};
```
## set
set通过键值添加数据内容
```js
set (key: string, value: any)
```
## get
get通过键值得到数据内容
```js
get (key: string)
```
## add
add方法添加数据库值的键
```js
add (value: any, key?: string)
```
## delete
delete通过键值删除数据内容
```js
delete (key: string)
```
## clear
clear清除所有内容
```js
clear()
```
## getObjectStore
> 定义事务模式

要读取现有对象存储的记录，事务可以处于readonly或readwrite模式。要更改现有的对象库，事务必须处于readwrite模式。您使用打开此类交易IDBDatabase.transaction。该方法接受两个参数：（storeNames范围，定义为要访问的对象存储的数组）和事务的mode（readonly或readwrite）。该方法返回一个包含该IDBIndex.objectStore方法的事务对象，可用于访问对象存储。默认情况下，如果未指定任何模式，则事务将以readonly模式打开。

