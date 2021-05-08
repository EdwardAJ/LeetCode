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
var isEvenOddTree = function(root) {
  let queue = [root]
  let level = 0
  
  while (queue.length) {
      let numberOfNodes = queue.length - 1
      let prevNodeVal = queue[0].val
      let isInitial = true
      
      for (let i = 0; i <= numberOfNodes; i++) {
          let node = queue.shift()
          
          if (level % 2 === 0) {
              if (node.val % 2 === 0) return false
              if (!isInitial && node.val <= prevNodeVal) return false
          } else {
              if (node.val % 2 !== 0) return false
              if (!isInitial && node.val >= prevNodeVal) return false
          }
          
          if (isInitial) {
              isInitial = false
          }
          
          prevNodeVal = node.val
          
          if (node.left !== null) {
              queue.push(node.left)
          }
          if (node.right !== null) {
              queue.push(node.right)
          }
      }
      level++
  }
  
  return true
};