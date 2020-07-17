# 布局相关
导入
````js
  import { Layout } form 'dt-utils';
````
## pageWidth
获取页面宽度
```js
  Layout.pageWidth()
```
## pageHeight
获取页面高度
```js
  Layout.pageHeight()
```
> 树形布局计算
## getGeoByRelativeNode
 根据父节点，计算当前节点的坐标
**参数**
 ````js
 /**
 *
 *根据父节点，计算当前节点的坐标
 * @export
 * @param {*} relativeNode
 * @param {*} node
 * @returns
 */
 Layout.getGeoByRelativeNode (relativeNode: any, node: any);
 ````
 ## getGeoByStartPoint
待补充
 ### 参数
 ````js
 /**
 *
 *
 * @export
 * @param {*} origin
 * @param {*} node
 * @returns
 */
Layout.getGeoByStartPoint (origin: any, node: any)
 ````
  ## getNodeHeight
待补充
 ### 参数
 ````js
 /*
 *
 * @param {*} node
 * @returns
 */
Layout.getNodeHeight = (node: any)
 ````
