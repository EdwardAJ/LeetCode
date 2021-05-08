class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        dp = [[0 for j in range(n)] for i in range(m)]
        dp[m-1][n-1] = 1
        
        def dfs (row, col):
            if (row < 0 or row >= m or col < 0 or col >= n): return 0
            if (dp[row][col] > 0): return dp[row][col]
            downPaths = dfs(row + 1, col)
            rightPaths = dfs(row, col + 1)
            dp[row][col] = downPaths + rightPaths
            return downPaths + rightPaths
            
        return dfs(0, 0)