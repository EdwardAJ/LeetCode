/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function constructTree (inorder, postorder) {
  if (inorder.length === 0) return null
  for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === postorder[postorder.length - 1]) {
          let leftNode =
              constructTree(inorder.slice(0, i), postorder.slice(0, i))
          
          let rightNode =
              constructTree(
                  inorder.slice(i + 1),
                  postorder.slice(i, postorder.length - 1)
              )
          
          return new TreeNode(inorder[i], leftNode, rightNode)
      }
  }
}

var buildTree = function(inorder, postorder) {
  return constructTree(
      inorder, postorder
  )
};