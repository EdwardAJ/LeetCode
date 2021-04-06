/**
 * @param {number[]} nums
 * @return {number}
 */

function getMinNum (nums, startIndex, endIndex) {
    if (endIndex < startIndex) {
        // if rotated n times
        return nums[0];
    }
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    
    if (endIndex > startIndex && nums[midIndex] > nums[midIndex + 1]) {
        // should be the smallest index
        return nums[midIndex + 1];
    }
    
    if (startIndex < endIndex && nums[midIndex] < nums[midIndex - 1]) {
        return nums[midIndex];    
    }
    
    if (nums[startIndex] > nums[midIndex]) {
        return getMinNum(nums, startIndex, midIndex - 1);
    }
    return getMinNum(nums, midIndex + 1, endIndex);
}

var findMin = function(nums) {
    return getMinNum(nums, 0, nums.length - 1);
};