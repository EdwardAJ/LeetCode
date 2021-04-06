/**
 * @param {number[]} nums
 * @return {number}
 */

// O(N) solution
var singleNonDuplicate = function(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        answer ^= nums[i];
    }
    return answer;
};