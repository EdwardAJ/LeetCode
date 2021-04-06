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

var findFrequentTreeSum = function(root) {
    let sumMap = {}
    let maxOccurence = 1
    
    // Do post-order traversal
    function _findFrequentTreeSum(root) {
        if (root === null) return 0
        let sum = _findFrequentTreeSum(root.left) + _findFrequentTreeSum(root.right) + root.val
        if (sumMap[sum] === undefined) {
            sumMap[sum] = 1
        } else {
            sumMap[sum]++
            maxOccurence = Math.max(sumMap[sum], maxOccurence)
        }
        return sum
    }
    
    _findFrequentTreeSum(root)
    
    let keys = Object.keys(sumMap)
    let mostFrequentSum = []
    
    for (let i = 0; i < keys.length; i++) {
        if (sumMap[keys[i]] === maxOccurence) {
            mostFrequentSum.push(keys[i])
        }
    }
    
    return mostFrequentSum
};