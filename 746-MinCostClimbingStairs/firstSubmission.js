/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
  let dp = {}
  
  function getMinCost (cost, currIndex) {
      if (dp[currIndex] !== undefined) {
          return dp[currIndex]
      }
      
      if (currIndex > cost.length - 1) {
          dp[currIndex] = 0
          return dp[currIndex]
      }
      
      if (currIndex === cost.length - 1) {
          dp[currIndex] = cost[currIndex]
          return dp[currIndex]
      }

      dp[currIndex] = cost[currIndex] +
          Math.min(
              getMinCost(cost, currIndex + 1),
              getMinCost(cost, currIndex + 2)
          )
      return dp[currIndex]
  }

  return Math.min(getMinCost(cost, 0), getMinCost(cost, 1))
};