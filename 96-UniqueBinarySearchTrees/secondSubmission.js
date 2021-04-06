/**
 * @param {number} n
 * @return {number}
 */




var numTrees = function(n) {
    // Initialize dp array
    let dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp.push(0)
    }
    
    // Bottom-up DP
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += (dp[j] * dp[i - j - 1])
        }
    }
    
    return dp[n]
};