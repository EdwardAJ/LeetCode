/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function _generateTrees(startNodeNum, endNodeNum) {
    if (startNodeNum > endNodeNum) return null
    let nodes = []
    for (let nodeNum = startNodeNum; nodeNum <= endNodeNum; nodeNum++) {
        let possibleLeftNodes = _generateTrees(startNodeNum, nodeNum - 1)
        let possibleRightNodes = _generateTrees(nodeNum + 1, endNodeNum)

        if (possibleLeftNodes !== null && possibleRightNodes !== null) {
            for (let i = 0; i < possibleLeftNodes.length; i++) {
                for (let j = 0; j < possibleRightNodes.length; j++) {
                    nodes.push(
                        new TreeNode(
                            nodeNum,
                            possibleLeftNodes[i],
                            possibleRightNodes[j])
                    )
                }
            }
        } else if (possibleLeftNodes !== null) {
            for (let i = 0; i < possibleLeftNodes.length; i++) {
                nodes.push(new TreeNode(
                    nodeNum,
                    possibleLeftNodes[i],
                    null
                ))
            }
        } else if (possibleRightNodes !== null) {
            for (let j = 0; j < possibleRightNodes.length; j++) {
                nodes.push(new TreeNode(
                    nodeNum,
                    null,
                    possibleRightNodes[j]
                ))
            }
        } else {
            nodes.push(new TreeNode(nodeNum, null, null))
        }
    }
    return nodes
}

var generateTrees = function(n) {
    return _generateTrees(1, n)
};