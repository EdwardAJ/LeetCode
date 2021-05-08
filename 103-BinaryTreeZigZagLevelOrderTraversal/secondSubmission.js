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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) return []
  let zigZags = []
  let queue = [root]
  let level = 1
  
  while (queue.length !== 0) {
      let currentQueueLength = queue.length
      let levelNodes = []
      for (let i = 0; i < currentQueueLength; i++) {
          if (level % 2 !== 0) {
              const node = queue.shift()
              levelNodes.push(node.val)
              if (node.left !== null) queue.push(node.left)
              if (node.right !== null) queue.push(node.right)
          } else {
              const node = queue.pop()
              levelNodes.push(node.val)
              if (node.right !== null) queue.unshift(node.right)
              if (node.left !== null) queue.unshift(node.left)    
          }
      }
      level++
      zigZags.push(levelNodes)
  }
  
  return zigZags  
};