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
    let nodes = []
    
    // Pre order traversal
    function traverseAndGetNodes (root) {
        if (root.left === null && root.right === null) {
            nodes.push(root.val)
            return
        }
        
        if (root.left !== null)
            traverseAndGetNodes(root.left)
        
        nodes.push(root.val)
        
        if (root.right !== null)
            traverseAndGetNodes(root.right)
        
        return
    }
    
    traverseAndGetNodes(root)
    
    return nodes[k-1]
};