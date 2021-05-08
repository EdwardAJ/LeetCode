/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let maxProfit = 0

  function setMaxProfit (prices, startIndex, endIndex) {
      if (startIndex === endIndex) return prices[startIndex]
      const maxValueToSell = setMaxProfit(prices, startIndex + 1, endIndex)
      if (maxValueToSell - prices[startIndex] > 0) {
          maxProfit = Math.max(maxProfit, maxValueToSell - prices[startIndex])
      }
      return Math.max(prices[startIndex], maxValueToSell)
  }
  
  setMaxProfit(prices, 0, prices.length - 1)
  return maxProfit
}