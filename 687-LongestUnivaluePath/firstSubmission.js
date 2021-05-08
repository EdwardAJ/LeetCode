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

var longestUnivaluePath = function(root) {
  let longestPath = 0;
  
  function traverseTree(root) {
      // Basis: null nodes
      if (root === null) {
          return 0;
      }
      
      // Recurrence
      let leftLength = traverseTree(root.left);
      if (root.val !== (root.left)?.val) {
          leftLength = 0;
      }

      let rightLength = traverseTree(root.right);
      if (root.val !== (root.right)?.val) {
          rightLength = 0;    
      }
      
      longestPath = Math.max(longestPath, leftLength + rightLength + 1);
      return Math.max(leftLength, rightLength) + 1;
  }
  
  traverseTree(root);
  
  if (longestPath === 0) return 0;
  return longestPath - 1;
};