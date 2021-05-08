/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = []
  for (let i = 0; i < nums.length; i++) {
      dp.push(1)
  }
  
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)   
          }
      }
  }
  
  let maxLen = dp[0]
  for (let i = 1; i < nums.length; i++) {
      maxLen = Math.max(maxLen, dp[i])
  }
  
  return maxLen
};