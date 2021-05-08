class Solution(object):
    def longestCommonSubsequence(self, text1, text2):
        """
        :type text1: str
        :type text2: str
        :rtype: int
        """
        rowLen = len(text1) + 1
        colLen = len(text2) + 1
        
        dp = [[0 for j in range(colLen)] for i in range(rowLen)]
        
        for i in range(1, rowLen):
            for j in range(1, colLen):
                if (text1[i-1] == text2[j-1]):
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i][j-1], dp[i-1][j])
        
        return dp[rowLen - 1][colLen - 1]