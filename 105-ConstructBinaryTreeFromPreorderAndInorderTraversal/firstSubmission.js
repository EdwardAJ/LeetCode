/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function getTree (preorder, startPOIndex, endPOIndex,
                inorder, startIOIndex, endIOIndex) {    
    if (startPOIndex > endPOIndex) return null
    for (let i = startIOIndex; i <= endIOIndex; i++) {
        if (inorder[i] === preorder[startPOIndex]) {
            let leftSubTree =
                getTree(
                    preorder, startPOIndex + 1, i + (startPOIndex - startIOIndex),
                    inorder, startIOIndex, i - 1
                )
            let rightSubTree =
                getTree(
                    preorder, i + (startPOIndex - startIOIndex) + 1, endPOIndex,
                    inorder, i + 1, endIOIndex
                )
            return new TreeNode(inorder[i], leftSubTree, rightSubTree)
        }
    }
}

var buildTree = function(preorder, inorder) {
    return getTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length -1)
};