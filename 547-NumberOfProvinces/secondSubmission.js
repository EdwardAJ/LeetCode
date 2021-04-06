/**
 * @param {number[][]} isConnected
 * @return {number}
 */


function visitCircle (isConnected, origin, isVisited) {
  let originStack = [origin]

  while (originStack.length) {
    let origin = originStack.pop()
    isVisited[origin] = true
    for (let i = 0; i < isConnected.length; i++) {
      if (!isVisited[i] && isConnected[origin][i]) {
        originStack.push(i)
      }
    }
  }
}

var findCircleNum = function(isConnected) {
  let isVisited = []
  for (let i = 0; i < isConnected.length; i++) {
      isVisited.push(false)
  }

  let circleNum = 0

  for (let origin = 0; origin < isConnected.length; origin++) {
    if (isVisited[origin]) continue
    visitCircle(isConnected, origin, isVisited)
    circleNum++
  }

  return circleNum
};