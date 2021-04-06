/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let smallestPositiveNum = 1;
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            map[nums[i]] = 1;
            while (map[smallestPositiveNum] !== undefined) {
                smallestPositiveNum++;
            }   
        }
    }
    
    return smallestPositiveNum;
};