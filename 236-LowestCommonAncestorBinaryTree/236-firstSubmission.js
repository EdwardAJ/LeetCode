/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    
    function getLCA (root, p, q) {
        if (root === null) {
            return false
        }

        let leftRes = getLCA(root.left, p, q)
        let rightRes = getLCA(root.right, p, q)
        

        if (root.val === p.val || root.val === q.val) {
            if (leftRes || rightRes) {
                lca = root
            }
            return true
        }

        if (leftRes && rightRes) {
            lca = root
        }

        return leftRes || rightRes
    }
    
    getLCA(root, p, q)
    return lca
};