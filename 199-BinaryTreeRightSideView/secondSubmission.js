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
 * @return {number[]}
 */


var rightSideView = function(root) {
    let rightSideViewNodes = []
    
    function getRightSideViewNodes (root, level) {
        if (root === null) return
        if (level > rightSideViewNodes.length) {
            rightSideViewNodes.push(root.val)
        }
        getRightSideViewNodes(root.right, level + 1)
        getRightSideViewNodes(root.left, level + 1)
    }
    
    getRightSideViewNodes(root, 1)
    return rightSideViewNodes
};

/* Or */

function getRightSideViewNodes (root, level, rightSideViewNodes) {
    if (root === null) return
    if (level > rightSideViewNodes.length) {
        rightSideViewNodes.push(root.val)
    }
    getRightSideViewNodes(root.right, level + 1, rightSideViewNodes)
    getRightSideViewNodes(root.left, level + 1, rightSideViewNodes)
}

var rightSideView = function(root) {
    let rightSideViewNodes = []
    
    getRightSideViewNodes(root, 1, rightSideViewNodes)
    return rightSideViewNodes
};