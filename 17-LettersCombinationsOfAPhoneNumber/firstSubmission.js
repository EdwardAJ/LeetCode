/**
 * @param {string} digits
 * @return {string[]}
 */

function generateLetterCombinations (digits, lettersMap) {
  if (digits.length === 0) return []
  
  let combinations = []
  const chars = lettersMap[digits[0]]
  
  for (let charIdx = 0; charIdx < chars.length; charIdx++) {
      let nextCombinations = generateLetterCombinations(digits.slice(1), lettersMap)
      if (nextCombinations.length === 0) {
          combinations.push(`${chars[charIdx]}`)
      } else {
           for (let i = 0; i < nextCombinations.length; i++) {
              combinations.push(`${chars[charIdx]}${nextCombinations[i]}`)
          }   
      }    
  }
  
  return combinations
}

var letterCombinations = function(digits) {
  let lettersMap = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz"
  }
  
  return generateLetterCombinations(digits, lettersMap)
  
  
};