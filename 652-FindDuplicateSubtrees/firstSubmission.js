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
 * @return {TreeNode[]}
 */


var findDuplicateSubtrees = function(root) {
  let traverseStringsMap = {}
  let duplicateSubtrees = []
  
  function traverse (root) {
      if (root === null) return ""
      
      let traverseString =
          `(${traverse(root.left)}${root.val}${traverse(root.right)})`
  
      if (traverseStringsMap[traverseString] !== undefined) {
          traverseStringsMap[traverseString] = root
      } else {
          traverseStringsMap[traverseString] = null
      }
  
      return traverseString
  }
  
  traverse(root)
  
  let roots = Object.values(traverseStringsMap)
  roots.map((root) => {
      if (root !== null) {
          duplicateSubtrees.push(root)
      }
  })
  
  return duplicateSubtrees
};