/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function dfs (board, isVisited, word, currRow, currCol) {
  if (word === '') return true
  
  if (
      (currRow < 0 || currRow >= board.length) ||
      (currCol < 0 || currCol >= board[0].length) ||
      (isVisited[currRow][currCol]) ||
      (board[currRow][currCol] !== word[0])
  ) return false
  
  isVisited[currRow][currCol] = true
  // Remove first character from word for next DFS
  const nextWord = word.slice(1)
  const isFound = (
      dfs(board, isVisited, nextWord, currRow, currCol-1) ||
      dfs(board, isVisited, nextWord, currRow-1, currCol) ||
      dfs(board, isVisited, nextWord, currRow, currCol+1) ||
      dfs(board, isVisited, nextWord, currRow+1, currCol)
  )
  isVisited[currRow][currCol] = false
  return isFound
}

var exist = function(board, word) {
  let isVisited = []
  for (let row = 0; row < board.length; row++) {
      let isVisitedCols = []
      for (let col = 0; col < board[row].length; col++) {
          isVisitedCols.push(false)
      }
      isVisited.push(isVisitedCols)
  }
  
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
          if (dfs(board, isVisited, word, row, col)) {
              return true
          }
      }
  }
  return false
};