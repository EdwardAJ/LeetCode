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
 * @param {number} key
 * @return {TreeNode}
 */

function deleteNodeAndGetTree(root, key, storedRoot, isKeyFound) {
  if (root === null) {
      return storedRoot
  }
  if (root.val > key || isKeyFound) {
      let leftRoot = deleteNodeAndGetTree(root.left, key, storedRoot, isKeyFound)
      return new TreeNode(root.val, leftRoot, root.right)
  }
  if (root.val < key) {
      let rightRoot = deleteNodeAndGetTree(root.right, key, storedRoot, isKeyFound)
      return new TreeNode(root.val, root.left, rightRoot)
  }
  if (root.val === key) {
      let newRoot = root.right
      if (newRoot === null) return root.left
      newRoot.left = deleteNodeAndGetTree(newRoot.left, key, root.left, true)
      return newRoot
  }
  
}

var deleteNode = function(root, key) {
  return deleteNodeAndGetTree(root, key, null, false)
};