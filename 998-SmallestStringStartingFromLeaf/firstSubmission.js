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
 * @return {string}
 */
function getCharFromNum (num) {
  return String.fromCharCode(num + 97)
}

var smallestFromLeaf = function(root) {
  
  let smallestString = ''
  
  function getSmallestString (root, currentString) {
      if (root.left === null && root.right === null) {
          currentString = `${getCharFromNum(root.val)}${currentString}`
          if (currentString < smallestString || smallestString === '') {
              smallestString = currentString
          }
          return
      }
      if (root.left !== null) {
          getSmallestString(root.left, `${getCharFromNum(root.val)}${currentString}`)
      }
      if (root.right !== null) {
          getSmallestString(root.right, `${getCharFromNum(root.val)}${currentString}`)
      }
      return
  }
  
  getSmallestString(root, '')
  
  return smallestString

};