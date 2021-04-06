/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function visitCircle (isConnected, origin, isVisited) {
  isVisited[origin] = true
  for (let i = 0; i < isConnected.length; i++) {
      if (!isVisited[i] && isConnected[origin][i]) {
          visitCircle(isConnected, i, isVisited)
      }
  }
}

var findCircleNum = function(isConnected) {
  let isVisited = []
  for (let i = 0; i < isConnected.length; i++) {
      isVisited.push(false)
  }
  
  let circleNum = 0
  for (let i = 0; i < isConnected.length; i++) {
      if (isVisited[i]) continue
      visitCircle(isConnected, i, isVisited)
      circleNum++
  }
  
  return circleNum
};