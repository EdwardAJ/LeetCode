/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */

var countPairs = function(root, distance) {
  if (root.left === null && root.right === null) return 0
  
  let graph = {}
  let currIndex = 0
  let isDfsIndexVisited = []
  let leafIndices = new Set()
  
  function makeGraph (root, originIndex) {
      currIndex++
      isDfsIndexVisited.push(false)
      
      if (root.left === null && root.right === null) {
          leafIndices.add(`${currIndex}`)
      }
      
      if (originIndex !== 0) {
          if (graph[originIndex] === undefined) {
              graph[originIndex] = {}
          }
          graph[originIndex][currIndex] = 1
          if (graph[currIndex] === undefined) {
              graph[currIndex] = {}
          }
          graph[currIndex][originIndex] = 1
      }

      const localCurrIndex = currIndex
      if (root.left !== null) {
          makeGraph(root.left, localCurrIndex)
      }
      
      if (root.right !== null) {
          makeGraph (root.right, localCurrIndex)
      }
  }
  
  makeGraph(root, 0)
  let numberOfGoodPairs = 0
  
  function dfsAndCountGoodPairs (fromIndex, _distance) {
      if (_distance > distance) return
      
      // Prevent same node leaf
      if (_distance > 0 && leafIndices.has(fromIndex)) {
          numberOfGoodPairs++
      }
          
      const toIndices = Object.keys(graph[fromIndex])
      for (const toIndex of toIndices) {
          if (isDfsIndexVisited[toIndex - 1]) continue
          isDfsIndexVisited[toIndex - 1] = true
          dfsAndCountGoodPairs(toIndex, _distance + 1)
          isDfsIndexVisited[toIndex - 1] = false
      }
  }
  
  for (const leafIndex of leafIndices) {
      isDfsIndexVisited[leafIndex - 1] = true
      dfsAndCountGoodPairs(leafIndex, 0)
      isDfsIndexVisited[leafIndex - 1] = false
  }
  
  return numberOfGoodPairs / 2
};