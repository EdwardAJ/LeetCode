def dfs(isVisited, grid, rowLength, colLength, rowIndex, colIndex):
    if rowIndex < 0 or rowIndex >= rowLength: return 0
    if colIndex < 0 or colIndex >= colLength: return 0
    if isVisited[rowIndex][colIndex]: return 0
    if grid[rowIndex][colIndex] == 0: return 0

    isVisited[rowIndex][colIndex] = True
    
    topArea = dfs(isVisited, grid, rowLength, colLength, rowIndex - 1, colIndex)
    bottomArea = dfs(isVisited, grid, rowLength, colLength, rowIndex + 1, colIndex)
    leftArea = dfs(isVisited, grid, rowLength, colLength, rowIndex, colIndex - 1) 
    rightArea = dfs(isVisited, grid, rowLength, colLength, rowIndex, colIndex + 1)
    return 1 + topArea + bottomArea + leftArea + rightArea
    
class Solution(object):
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        isVisited = []
        
        rowLength = len(grid)
        colLength = len(grid[0])
        
        for i in range(rowLength):
            row = [False for j in range(colLength)]
            isVisited.append(row)
        
        maxArea = 0
        for i in range(rowLength):
            for j in range(colLength):
                area = dfs(isVisited, grid, rowLength, colLength, i, j)
                maxArea = max(maxArea, area)
        return maxArea
        
        