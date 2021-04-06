/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function getSumListNode (l1, l2, remainder) {
  if (l1 === null && l2 === null) {
      return remainder ? new ListNode(remainder, null) : null
  }

  let sum = (remainder + (l1?.val ?? 0) + (l2?.val ?? 0))
  let nextRemainder = sum >= 10 ? 1 : 0
  sum %= 10
  
  let nextListNode = getSumListNode(
              l1 === null ? l1 : l1.next,
              l2 === null ? l2 : l2.next,
              nextRemainder)
  
  return new ListNode(sum, nextListNode)
}


var addTwoNumbers = function(l1, l2) {
  return getSumListNode(l1, l2,  0)
}