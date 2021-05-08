class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        dp = [[True for _ in range(len(s))] for _ in range(len(s))]
        
        numOfSubstrings = 0
            
        for i in range(len(s) - 1, 0 - 1, -1):
            for j in range(i + 1, len(s)):
                if (s[i] == s[j] and dp[i+1][j-1]):
                    numOfSubstrings += 1
                    dp[i][j] = True
                else:
                    dp[i][j] = False
            
        return numOfSubstrings + len(s)