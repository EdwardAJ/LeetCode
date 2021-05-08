/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [0, 1]
  for (let i = 1; i <= n; i++) {
      dp.push(dp[i] + dp[i-1])
  }
  return dp[n + 1]
};