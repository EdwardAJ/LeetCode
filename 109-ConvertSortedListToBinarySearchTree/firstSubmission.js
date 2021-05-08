/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function makeBST (nodeArr, leftIdx, rightIdx) {
  if (leftIdx > rightIdx) return null
  
  let midIdx = Math.floor((leftIdx + rightIdx) / 2)
  let leftNode = makeBST(nodeArr, leftIdx, midIdx - 1)
  let rightNode = makeBST(nodeArr, midIdx + 1, rightIdx)
  
  return new TreeNode(nodeArr[midIdx], leftNode, rightNode)
}

var sortedListToBST = function(head) {
  let nodeArr = []
  let ptr = head
  while (ptr !== null) {
      nodeArr.push(ptr.val)
      ptr = ptr.next
  }
  
  return makeBST(nodeArr, 0, nodeArr.length - 1)
};