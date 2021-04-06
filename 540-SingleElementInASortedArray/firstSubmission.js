/**
 * @param {number[]} nums
 * @return {number}
 */
// O(log N) solution
function findNonDuplicateElement (nums, startIndex, endIndex) {
    if (endIndex < startIndex) {
        return -1;
    }
    
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (startIndex < endIndex && nums[midIndex] === nums[midIndex - 1]) {
        let leftNum = findNonDuplicateElement(nums, startIndex, midIndex - 2);
        return leftNum !== -1 ? leftNum : findNonDuplicateElement(nums, midIndex + 1, endIndex);
    }
    if (endIndex > startIndex && nums[midIndex] === nums[midIndex + 1]) {
        let rightNum = findNonDuplicateElement(nums, midIndex + 2, endIndex);
        return rightNum !== -1 ? rightNum : findNonDuplicateElement(nums, startIndex, midIndex - 1);
    }
    
    return nums[midIndex];
}

var singleNonDuplicate = function(nums) {
    return findNonDuplicateElement(nums, 0, nums.length - 1);
};