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
var maxLevelSum = function(root) {
    let levelSumMap = {}
    let nodeQueue = [ { node: root, level: 1 }]
    
    // BFS
    while (nodeQueue.length !== 0) {
        let { node, level } = nodeQueue.shift()
        
        if (levelSumMap[level] !== undefined)
            levelSumMap[level] += node.val
        else
            levelSumMap[level] = node.val
        
        let nextLevel = level + 1
        
        if (node.left !== null)
            nodeQueue.push({ node: node.left, level: nextLevel})
        
        if (node.right !== null)
            nodeQueue.push({ node: node.right, level: nextLevel})
    }
    
    let treeLevel = Object.keys(levelSumMap).length
    let maxLevelSum = 1
    for (let level = 2; level <= treeLevel; level++) {
        if (levelSumMap[level] > levelSumMap[maxLevelSum]) {
            maxLevelSum = level
        }
    }
    
    return maxLevelSum
};