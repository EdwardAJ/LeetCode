def dfs (isVisited, grid, rowLen, colLen, rowIndex, colIndex):
    if rowIndex < 0 or rowIndex >= rowLen: return
    if colIndex < 0 or colIndex >= colLen: return
    if isVisited[rowIndex][colIndex]: return
    if grid[rowIndex][colIndex] == "0": return
    
    isVisited[rowIndex][colIndex] = True

    dfs(isVisited, grid, rowLen, colLen, rowIndex + 1, colIndex)
    dfs(isVisited, grid, rowLen, colLen, rowIndex - 1, colIndex)
    dfs(isVisited, grid, rowLen, colLen, rowIndex, colIndex + 1)
    dfs(isVisited, grid, rowLen, colLen, rowIndex, colIndex - 1)
    return

class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        isVisited = []
        
        rowLen = len(grid)
        colLen = len(grid[0])
        for i in range(rowLen):
            row = [False for j in range(colLen)]
            isVisited.append(row)
        
        numOfIslands = 0
        
        for i in range(rowLen):
            for j in range(colLen):
                if not isVisited[i][j] and grid[i][j] == "1":
                    dfs(isVisited, grid, rowLen, colLen, i, j)
                    numOfIslands += 1
                    
        return numOfIslands
                
        