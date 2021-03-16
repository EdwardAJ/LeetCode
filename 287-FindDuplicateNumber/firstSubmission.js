/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let answer = -1;
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (numsMap[nums[i]] !== undefined) {
            answer = nums[i];
            break;
        }
        numsMap[nums[i]] = 1;
    }
    
    return answer;
};