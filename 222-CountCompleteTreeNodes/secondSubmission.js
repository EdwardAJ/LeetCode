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

function countHeight(root) {
  if (root === null) return 0
  return 1 + countHeight(root.left)
}

function getNumberOfNodes (height) {
  return Math.pow(2, height) - 1
}

var countNodes = function(root) {
  if (root === null) {
      return 0
  }
  let treeHeight = countHeight(root)
  let rightHeight = countHeight(root.right)
  
  if (treeHeight === rightHeight + 1) {
      return 1 + getNumberOfNodes(treeHeight - 1) + countNodes(root.right)
  }
  return 1 + getNumberOfNodes(treeHeight - 2) + countNodes(root.left)
};