class Solution(object):
    def longestPalindromeSubseq(self, s):
        """
        :type s: str
        :rtype: int
        """
        stringLength = len(s)
        dp = [[0 for _ in range(stringLength)] for _ in range(stringLength)]
        
        for i in range(stringLength):
            dp[i][i] = 1
        
        for i in range(stringLength - 1, 0 - 1, -1):
            for j in range(i+1, stringLength):
                if (s[i] == s[j]):
                    dp[i][j] = dp[i+1][j-1] + 2
                else:
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])
        
        return dp[0][stringLength - 1]