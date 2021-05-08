/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let contiguousSum = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
      contiguousSum += nums[i]
      contiguousSum = Math.max(contiguousSum, nums[i])
      if (contiguousSum > maxSum) {
          maxSum = contiguousSum
      }
  }
  return maxSum
};