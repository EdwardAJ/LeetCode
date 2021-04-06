/**
 * @param {number[]} nums
 * @return {number}
 */

function findPeakElementHelper (nums, startIndex, endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[midIndex - 1] > nums[midIndex])
        return findPeakElementHelper(nums, startIndex, midIndex - 1);
    if (nums[midIndex + 1] > nums[midIndex]) {
        return findPeakElementHelper(nums, midIndex + 1, endIndex);
    }
    return midIndex;
    
}

var findPeakElement = function(nums) {
    return findPeakElementHelper(nums, 0, nums.length - 1);
};