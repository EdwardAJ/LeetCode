/**
 * @param {number[]} nums
 * @return {number}
 */

function findPeakElementHelper (nums, startIndex, endIndex) {
    if (endIndex < startIndex) {
        return -1;
    }
    // Base case: peak element
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (midIndex + 1 <= nums.length - 1 && midIndex - 1 >= 0) {
        if (nums[midIndex] > nums[midIndex + 1] && nums[midIndex] > nums[midIndex - 1]) {
            return midIndex;
        }
    }
    if (midIndex + 1 > nums.length - 1) {
        if (nums[midIndex] > nums[midIndex - 1]) {
            return midIndex;
        }
    } 
    if (midIndex - 1 < 0) {
        if (nums[midIndex] > nums[midIndex + 1]) {
            return midIndex;
        }
    }
    if (nums[midIndex - 1] > nums[midIndex])
        return findPeakElementHelper(nums, startIndex, midIndex - 1);
    return findPeakElementHelper(nums, midIndex + 1, endIndex);
}

var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    return findPeakElementHelper(nums, 0, nums.length - 1);
};