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
 * @return {number}
 */


var sumNumbers = function(root) {
  let sum = 0
  
  function sumNumbersHelper (root, currentSum) {
      if (root.left === null && root.right === null) {
          sum += (currentSum * 10) + root.val
          return
      }
      if (root.left !== null) {
          sumNumbersHelper(root.left, currentSum * 10 + root.val)    
      }
      if (root.right !== null) {
          sumNumbersHelper(root.right, currentSum * 10 + root.val)
      }
      return
  }
  
  sumNumbersHelper(root, 0)
  
  return sum
};