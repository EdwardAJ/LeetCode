/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tortoise = nums[nums[0]];
    let hare = nums[nums[nums[0]]];
    
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    }
    
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return tortoise;
};