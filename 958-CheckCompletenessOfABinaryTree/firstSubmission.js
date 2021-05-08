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
 * @return {boolean}
 */

function getHeight (root) {
  if (root === null) return 0
  let leftHeight = 1 + getHeight(root.left)
  let rightHeight = 1 + getHeight(root.right)
  return Math.max(leftHeight, rightHeight)
}

var isCompleteTree = function(root) {
  let treeHeight = getHeight(root)
  if (treeHeight === 1) return true
  
  let queue = [root]
  let currHeight = 1
  
  while (queue.length) {
      let numOfNodes = queue.length - 1
      let currNode = null
      for (let i = 0; i <= numOfNodes; i++) {
          let node = queue.shift()
          if (currHeight !== treeHeight - 1) {
              if (node.left === null || node.right === null) return false
              if (node.left !== null) {
                  queue.push(node.left)
              }
              if (node.right !== null) {
                  queue.push(node.right)
              }
          } else {
              if (i === 0) {
                  currNode = node.left
                  if (currNode === null && node.right !== null) return false
                  currNode = node.right
              } else {
                  if (currNode === null && node.left !== null) return false
                  currNode = node.left
                  if (currNode === null && node.right !== null) return false
                  currNode = node.right
              }
          }
      }
      currHeight++
  }
  
   return true
};