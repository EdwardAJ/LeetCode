/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Improved binary search solution
function binarySearch (arr, startIndex, endIndex, target) {
    if (startIndex > endIndex) {
        // Not found
        return false;
    }
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[midIndex] > target) {
        return binarySearch(arr, startIndex, midIndex - 1, target);
    }
    if (arr[midIndex] < target) {
        return binarySearch(arr, midIndex + 1, endIndex, target);
    }
    return true;
};


var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let lastIndex = matrix[i].length - 1;
        if (target >= matrix[i][0] && target <= matrix[i][lastIndex]) {
            return binarySearch(matrix[i], 0, lastIndex, target);
        }
    }
    return false;
};