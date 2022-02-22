# dt-utils | <a href="./docs/CHANGELOG.md" target="_black">CHANGELOG</a>
工具库
## 安装依赖
```bash
npm install @dtinsight/dt-utils
yarn add @dtinsight/dt-utils
pnpm install @dtinsight/dt-utils
```
## 文档地址  
  - [在线文档](https://dtstack.github.io/dt-utils/)
  
## 使用

````js
  import { Utils, Cookie, DateTime, Layout, CopyUtils, LocalIndexedDB, LocalDB } from '@dtinsight/dt-utils';
````


# 贡献指南

欢迎大家参与贡献，本文将指导你如何贡献一份自己的力量，在提 issue 或者 pull request 之前，请花几分钟来阅读这篇指南。


## 分支管理

我们长期维护 master 分支，在创建分支前，请先了解一下分支规范。

+ **master**： 主干分支，用于发包

+ **feat**： 新特性分支

+ **fix**： 常规 bug 修复分支


## 新增功能

如需开发功能，请遵循以下流程：

1、请 `fork` 本项目，`clone` 自己的仓库，按照上述分支定义从 `master` 分支新建 `feat` 分支进行开发，分支命名用下划线加上版本号，如：`feat_1.x_xxx`

2、`feat` 分支开发完毕后请向相应人员提 PR，期望合入 `master` 分支，待相应人员 review 代码后合入


## Bugs

我们使用 GitHub issues 来做 bug 追踪。

如果你在使用中发现了 bug，请给我们提 issue。如果你想自行修复这个问题，请遵循以下流程：

1、请从 **master** 分支中新建 **fix** 分支进行修复，分支命名用下划线加上版本号，如：**hotfix_1.x_xxx**

2、相关问题修复完毕后请向相应人员提 PR，期望合入**master** 分支，待相应人员 review 代码后合入


## 第一次贡献

如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。
