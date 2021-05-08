/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
  let dp = [0, cost[0], cost[1]]
  
  for (let i = 2; i < cost.length; i++) {
      dp.push(cost[i] + Math.min(dp[i], dp[i - 1]))
  }
  
  return Math.min(dp[cost.length], dp[cost.length - 1])
};