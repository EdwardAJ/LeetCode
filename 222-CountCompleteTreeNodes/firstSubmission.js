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

function countLeftHeight(root) {
  if (root === null) return 0
  return 1 + countLeftHeight(root.left)
}

function countRightHeight(root) {
  if (root === null) return 0
  return 1 + countRightHeight(root.right)
}

function getNumberOfNodes (height) {
  return Math.pow(2, height) - 1
}

var countNodes = function(root) {
  if (root === null) {
      return 0
  }
  let leftHeight = countLeftHeight(root)
  let rightHeight = countRightHeight(root)
  if (leftHeight === rightHeight) {
      return getNumberOfNodes(leftHeight)
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
};