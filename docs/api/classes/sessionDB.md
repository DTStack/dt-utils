[dt-utils](../globals.md) / SessionDB

# Class: SessionDB

Defined in: [sessionDB/index.ts:54](https://github.com/DTStack/dt-utils/blob/master/src/sessionDB/index.ts#L54)

一个用于管理浏览器 Session 存储的工具类，提供类型安全的方法

## Description

SessionDB 为浏览器的 sessionStorage API 提供了一个包装器，具有以下附加功能：
- 类型安全的数据存储和检索
- 自动 JSON 序列化/反序列化
- 批量操作支持
- 可选择性清除带例外项

## Methods

| 方法名 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `set(items: Record<string, any>)` | 向 sessionStorage 添加多个项目 | `items: Record<string, any>` - 键值对对象 | `void` |
| `set(key: string, value: any)` | 通过键名在 sessionStorage 中存储单个数据值（如果 value 为 null/undefined，则删除该键） | `key: string` - 存储的唯一标识符 <br> `value: any` - 要存储的数据 | `void` |
| `get` | 通过键名从 sessionStorage 中获取数据 | `key: string` - 要获取数据的唯一标识符 | `any`（可能是对象或字符串，找不到返回 null） |
| `remove` | 通过键名从 sessionStorage 中删除数据 | `key: string | string[]` - 要删除数据的唯一标识符 | `void` |
| `clear` | 清除 sessionStorage，可以选择性保留特定键 | `except?: string[]` - 可选的要保留的键数组 | `void` |

## Example

```typescript
import { SessionDB } from 'dt-utils';

// 存储简单值
SessionDB.set('username', 'john_doe');

// 存储对象
SessionDB.set('userProfile', {
  id: 123,
  name: 'John Doe',
  preferences: { theme: 'dark' }
});

// 一次存储多个项目
SessionDB.set({
  token: 'abc123',
  lastLogin: new Date().toISOString()
});

// 检索存储的数据
const username = SessionDB.get('username'); // => 'john_doe'
const profile = SessionDB.get('userProfile'); // => { id: 123, ... }

// 删除特定项目
SessionDB.remove('username');
SessionDB.remove(['token', 'lastLogin']); // 删除多个项目

// 清除所有项目，除了指定的键
SessionDB.clear(['userProfile']); // 只保留 userProfile
```
