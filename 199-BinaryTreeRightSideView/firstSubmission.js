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
    if (root === null) return []
    let rightSideNodes = []
    let nodeQueue = [root]
    
    while (nodeQueue.length) {
        let length = nodeQueue.length
        rightSideNodes.push(nodeQueue[length - 1].val)
        for (let i = 0; i < length; i++) {
            let node = nodeQueue.shift()
            if (node.left !== null)
                nodeQueue.push(node.left)
            if (node.right !== null)
                nodeQueue.push(node.right)
        }
    }
    
    return rightSideNodes
};