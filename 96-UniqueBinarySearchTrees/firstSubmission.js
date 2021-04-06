/**
 * @param {number} n
 * @return {number}
 */



var numTrees = function(n) {
    if (n === 0 || n === 1)  return 1
    let i = 0
    let numberOfUniqueTrees = 0
    while (i < n) {
        let leftLength = i
        let rightLength = n - i - 1
        numberOfUniqueTrees += (numTrees(leftLength) * numTrees(rightLength))
        i++
    }
    return numberOfUniqueTrees
};