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
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSubPathHelper(listNode, treeNode) {
    if (listNode === null) return true;
    if (treeNode === null) return false;
    if (listNode.val !== treeNode.val) return false;
    return isSubPathHelper(listNode.next, treeNode.left) || isSubPathHelper(listNode.next, treeNode.right);
};

var isSubPath = function(head, root) {
    let treeNodeQueue = [root];
    while (treeNodeQueue.length) {
        let treeNode = treeNodeQueue.shift();
        if(isSubPathHelper(head, treeNode)) return true;
        if (treeNode.left !== null) treeNodeQueue.push(treeNode.left);
        if (treeNode.right !== null) treeNodeQueue.push(treeNode.right);
    }
    return false;
};