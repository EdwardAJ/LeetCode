/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
    if ((root === null) || (root.left === null && root.right === null))
        return root
    root.left.next = root.right
    connect(root.left, root)
    root.right.next = (root.next)?.left
    connect(root.right, root)
    return root
};