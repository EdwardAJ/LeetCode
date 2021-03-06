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

function _isValidBST(root, min, max) {
    if (root === null) return true
    if (root.val <= min || root.val >= max) return false
    return _isValidBST(root.left, min, Math.min(max, root.val)) && _isValidBST(root.right, Math.max(min, root.val), max)
}


var isValidBST = function(root) {
  return _isValidBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)  
};