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
 * @param {number} sum
 * @return {number}
 */

function getPathsCount (root, sum) {
    // Base case: if it's already checking the leaf
    if (root.left === null && root.right === null) {
        if (sum - root.val === 0) {
            return 1
        }
        return 0
    }
    
    // Recurrence
    let pathsCount = 0
    if (sum - root.val === 0) {
        pathsCount += 1
    }
    
    if (root.left !== null) {
        pathsCount += getPathsCount(root.left, sum - root.val)
    }
    if (root.right !== null) {
        pathsCount += getPathsCount(root.right, sum - root.val)
    }
    
    return pathsCount
}

function traverseAndGetPathsCount (root, sum) {
    let pathsCountSum = getPathsCount(root, sum)
    if (root.left !== null) {
        pathsCountSum += traverseAndGetPathsCount(root.left, sum)
    }
    
    if (root.right !== null) {
        pathsCountSum += traverseAndGetPathsCount(root.right, sum)
    }
    
    return pathsCountSum
}

var pathSum = function(root, sum) {
    // Handle tree with zero nodes
    if (root === null) {
        return 0
    }
    
    // Else, traverse
    return traverseAndGetPathsCount(root, sum)
};