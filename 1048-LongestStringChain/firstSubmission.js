/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  let wordsMap = {}
  let dp = {}
  
  for (let i = 0; i < words.length; i++) {
      dp[words[i]] = 1
      if (wordsMap[words[i].length] === undefined)
          wordsMap[words[i].length] = [words[i]]
      else
          wordsMap[words[i].length].push(words[i])
  }
  
  let longestStringChain = 1
  
  for (let wordLen = 1; wordLen <= 16; wordLen++) {
      if (wordsMap[wordLen] === undefined) continue
      
      for (let word of wordsMap[wordLen]) { 
          for (let charIndex = 0; charIndex < word.length; charIndex++) {
              let reducedWord = `${word.slice(0, charIndex)}${word.slice(charIndex + 1)}`
              if (dp[reducedWord] !== undefined) {
                  dp[word] = Math.max(dp[word], dp[reducedWord] + 1)
              }
          }
          longestStringChain = Math.max(longestStringChain, dp[word])
      }
  }
  
  return longestStringChain
};