/**
 * @param {number[]} nums
 * @return {number}
 */

function getMaxSubArray (nums, startIndex, endIndex) {
  if (startIndex === endIndex) return nums[startIndex]
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  
  let leftSum = nums[midIndex]
  let tempSum = nums[midIndex]
  for (let i = midIndex - 1; i >= startIndex; i--) {
      tempSum += nums[i]
      leftSum = Math.max(leftSum, tempSum)
  }
  
  let rightSum = nums[midIndex + 1]
  tempSum = nums[midIndex + 1]
  for (let i = midIndex + 2; i <= endIndex; i++) {
      tempSum += nums[i]
      rightSum = Math.max(rightSum, tempSum)
  }
       
  return Math.max(
      getMaxSubArray(nums, startIndex, midIndex),
      getMaxSubArray(nums, midIndex + 1, endIndex),
      leftSum + rightSum
  )
}

var maxSubArray = function(nums) {
  return getMaxSubArray(nums, 0, nums.length - 1)
};