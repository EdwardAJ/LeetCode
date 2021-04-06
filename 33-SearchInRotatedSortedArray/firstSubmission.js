/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binarySearch(nums, target, startIndex, endIndex) {
    // Base
    if (endIndex < startIndex) {
        return -1;
    }
    let middleIndex = Math.floor((endIndex + startIndex) / 2);
    if (nums[middleIndex] === target) {
        return middleIndex;
    }
    if (nums[middleIndex] > target) {
        return binarySearch(nums, target, startIndex, middleIndex - 1);
    }
    return binarySearch(nums, target, middleIndex + 1, endIndex);
};

function searchPivotIndex (nums, startIndex, endIndex) {
    if (endIndex < startIndex) {
        return 0;
    }
    let middleIndex = Math.floor((endIndex + startIndex) / 2);
    if (endIndex > startIndex && nums[middleIndex] > nums[middleIndex + 1]) {
        return middleIndex + 1;
    }
    if (startIndex < endIndex && nums[middleIndex] < nums[middleIndex - 1]) {
        return middleIndex;
    }
    // Recurrence
    if (nums[startIndex] > nums[middleIndex]) {
        return searchPivotIndex(nums, startIndex, middleIndex - 1);
    }
    return searchPivotIndex(nums, middleIndex + 1, endIndex);
};

var search = function(nums, target) {
    let pivotIndex = searchPivotIndex(nums, 0, nums.length - 1);
    if (pivotIndex == 0) {
        return binarySearch(nums, target, 0, nums.length - 1);
    }
    if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivotIndex - 1);
    }
    return binarySearch(nums, target, pivotIndex, nums.length - 1);
};