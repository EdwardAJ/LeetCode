/**
 * @param {number[]} nums
 * @return {number}
 */


var firstMissingPositive = function(nums) {
    const NOT_USED = -999;
    for (let i = 0; i < nums.length; i++) {
        // While element number is not equal to ith number in array
        // Or is positive
        while ((nums[i] !== i + 1) && (nums[i] > 0)) {
            // Check if the array can hold the element
            if (nums[i] - 1 > nums.length - 1) {
                nums[i] = NOT_USED;
            } else {
                let countingNumIndex = nums[i] - 1;
                // If the element number is a duplicate
                if (nums[countingNumIndex] === nums[i]) {
                    nums[i] = NOT_USED;
                    break;
                }
                let temp = nums[i];
                nums[i] = nums[countingNumIndex];
                nums[countingNumIndex] = temp;
            }
        }
    }
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
    
};