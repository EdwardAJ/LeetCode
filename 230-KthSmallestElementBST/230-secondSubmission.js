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
 * @param {number} k
 * @return {number}
 */


var kthSmallest = function(root, k) {
    let nodeCount = 0
    let kthSmallestNode = -1
    
    // Pre order traversal
    function traverseAndGetNodes (root, k) {
        if (root.left === null && root.right === null) {
            nodeCount++
            if (nodeCount === k) {
                kthSmallestNode = root.val
            }
            return
        }
        
        if (root.left !== null)
            traverseAndGetNodes(root.left, k)
        
        nodeCount++
        if (nodeCount === k) {
            kthSmallestNode = root.val
        }
        
        if (root.right !== null)
            traverseAndGetNodes(root.right, k)
        
        return
    }
    
    traverseAndGetNodes(root, k)
    
    return kthSmallestNode
};