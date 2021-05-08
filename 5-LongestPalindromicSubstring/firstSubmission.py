class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        dp = [[0 for _ in range(len(s))] for _ in range(len(s))]
        
        for i in range(len(s)):
            dp[i][i] = 1
        
        maxLen = 1
        longestSubstring = s[0]
        
        for i in range(len(s) - 1, 0 - 1, -1):
            for j in range(i+1, len(s)):
                if (s[i] == s[j] and dp[i+1][j-1] != -1):
                    dp[i][j] = dp[i+1][j-1] + 2
                    if (dp[i][j] > maxLen):
                        maxLen = dp[i][j]
                        longestSubstring = s[i:j+1]
                else:
                    dp[i][j] = -1
        return longestSubstring