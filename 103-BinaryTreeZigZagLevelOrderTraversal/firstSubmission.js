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
  
  while (queue.length !== 0) {
      let currentQueueLength = queue.length
      let levelNodes = []
      for (let i = 0; i < currentQueueLength; i++) {
          const node = queue.shift()
          if (node.left !== null)
              queue.push(node.left)
          if (node.right !== null)
              queue.push(node.right)
          levelNodes.push(node.val)
      }
      zigZags.push(levelNodes)
  }
  
  
  for (let level = 0; level < zigZags.length; level++) {
      if (level % 2 !== 0) {
          zigZags[level] = zigZags[level].reverse()
      }   
  }
  
  return zigZags  
};