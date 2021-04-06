/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Binary search solution
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
    let isFound = false;
    for (let arrIndex = 0; arrIndex < matrix.length; arrIndex++) {
        isFound = binarySearch(matrix[arrIndex], 0, matrix[arrIndex].length - 1, target);
        if (isFound) return true;
    }
    return false;
};