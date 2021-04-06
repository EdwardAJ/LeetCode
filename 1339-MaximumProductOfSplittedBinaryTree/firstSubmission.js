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
const MAX_NUM = 1000000007;

var maxProduct = function(root) {
    // Use index for tracking tree.
    let traverseIndex = 0;
    let sumBySubTreeRoot = [];
    
    function traverseAndGetSum (root) {
        if (root === null) return 0;
        let sum = traverseAndGetSum(root.left) + traverseAndGetSum(root.right) + root.val;
        sumBySubTreeRoot.push(sum);
        traverseIndex += 1;
        return sum;
    };
    
    
    let treeSum = traverseAndGetSum(root);
    traverseIndex = 0;
    let maxProductVariable = 0;
    
    function traverseAndGetMaxProduct(root) {
        if (root === null) return 0;
        traverseAndGetMaxProduct(root.left);
        traverseAndGetMaxProduct(root.right);
        let product =
            (
                (treeSum - sumBySubTreeRoot[traverseIndex])
                * sumBySubTreeRoot[traverseIndex]
            );
        
        maxProductVariable = Math.max(maxProductVariable, product);
        traverseIndex += 1;
    }
    
    traverseAndGetMaxProduct(root);
    
    return maxProductVariable % MAX_NUM;
};