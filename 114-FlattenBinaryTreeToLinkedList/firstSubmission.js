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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  if (root === null) return
  flatten(root.right)
  flatten(root.left)
  
  if (root.left !== null) {
      let tempRoot = root.right
      let ptr = root.left
      while (ptr.right !== null) {
          ptr = ptr.right
      }
      ptr.right = tempRoot
      root.right = root.left
      root.left = null
  }
};