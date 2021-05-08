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


function getMaxMoney(root) {
  if (root === null) return {notRob: 0, rob: 0}
  const left = getMaxMoney(root.left)
  const right = getMaxMoney(root.right)
  
  const rob = root.val + left.notRob + right.notRob
  const notRob = Math.max(left.rob, left.notRob) + Math.max(right.rob, right.notRob)
  
  return { notRob, rob }
}

var rob = function(root) {
  const { notRob, rob } = getMaxMoney(root)
  return Math.max(notRob, rob)
};