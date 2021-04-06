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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */


var addOneRow = function(root, val, depth) {
    if (depth === 0) return new TreeNode(val, undefined, root)
    if (depth === 1) return new TreeNode(val, root, undefined)
    if (root === null) return null
    root.left = addOneRow(root.left, val, depth > 2 ? depth - 1 : 1)
    root.right = addOneRow(root.right, val, depth > 2 ? depth - 1 : 0)
    return root
};