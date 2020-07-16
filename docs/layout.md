# 布局相关

## pageWidth
获取页面宽度
```js
  Utils.pageWidth()
```
## pageHeight
获取页面高度
```js
  Utils.pageHeight()
```

###  树形布局计算
> 先计算 level。 maxLevel , maxCount
计算 index, count
根据 maxLevel， maxCount 计算宽高，根据 level, index , relativeNode计算 x, y;
## getGeoByRelativeNode
 根据父节点，计算当前节点的坐标
### 参数
 ````js
 /**
 *
 *根据父节点，计算当前节点的坐标
 * @export
 * @param {*} relativeNode
 * @param {*} node
 * @returns
 */
 getGeoByRelativeNode (relativeNode: any, node: any);
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
getGeoByStartPoint (origin: any, node: any)
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
getNodeHeight = (node: any)
 ````
