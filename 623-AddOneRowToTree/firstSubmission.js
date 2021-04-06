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

function buildNewTree(root, val, targetDepth, currentDepth) {
    if (root === null) return null
    let leftSubTree = null
    let rightSubTree = null
    
    if (currentDepth === targetDepth - 1) {
        leftSubTree = new TreeNode(val, root.left, undefined)
        rightSubTree = new TreeNode(val, undefined, root.right)
        return new TreeNode(root.val, leftSubTree, rightSubTree)
    }
    
    leftSubTree = buildNewTree(root.left, val, targetDepth, currentDepth + 1)
    rightSubTree = buildNewTree(root.right, val, targetDepth, currentDepth + 1)
    return new TreeNode(root.val, leftSubTree, rightSubTree)
}

var addOneRow = function(root, val, depth) {
    if (depth === 1)
        return new TreeNode(val, root, undefined)
    return buildNewTree(root, val, depth, 1)
};