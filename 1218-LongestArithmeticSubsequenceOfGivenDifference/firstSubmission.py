class Solution(object):
    def longestSubsequence(self, arr, difference):
        """
        :type arr: List[int]
        :type difference: int
        :rtype: int
        """
        
        dp = dict()
        
        arrLen = len(arr)

        maxLen = 1
        for i in range(arrLen):
            if (arr[i] - difference) in dp:
                dp[arr[i]] = dp[arr[i] - difference] + 1
            else:
                dp[arr[i]] = 1
            
            maxLen = max(dp[arr[i]], maxLen)
                
        
                    
        return maxLen