export function lcs(X, Y) {
    const m = X.length;
    const n = Y.length;

    // Initialize the dp array and direction array with 0 and empty strings respectively
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const direction = Array.from({ length: m + 1 }, () => Array(n + 1).fill(''));

    // Fill the dp array and direction array iteratively
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                direction[i][j] = '↖';
            } else if (dp[i - 1][j] >= dp[i][j - 1]) {
                dp[i][j] = dp[i - 1][j];
                direction[i][j] = '↑';
            } else {
                dp[i][j] = dp[i][j - 1];
                direction[i][j] = '←';
            }
        }
    }

    // Reconstruct the LCS from the dp and direction arrays
    let lcsStr = [];
    let i = m, j = n;

    while (i > 0 && j > 0) {
        if (direction[i][j] === '↖') {
            lcsStr.push(X[i - 1]);
            i--;
            j--;
        } else if (direction[i][j] === '↑') {
            i--;
        } else {
            j--;
        }
    }

    // The lcsStr array is built backwards, so reverse it
    lcsStr.reverse();

    return { lengthOfLCS: dp[m][n], lcsStr: lcsStr.join(''), dp, direction };
}

  // Usage example
//   const text1 = "AGGTAB";
//   const text2 = "GXTXAYB";
  
//   const { lengthOfLCS, lcsStr, dp, direction } = lcs(text1, text2);
  
//   console.log("Length of LCS:", lengthOfLCS);
//   console.log("LCS:", lcsStr);
//   console.log("DP Matrix:");
//   dp.forEach(row => console.log(row));
//   console.log("Direction Matrix:");
//   direction.forEach(row => console.log(row));




  function getAllSubsequences(str) {
    const subsequences = [];

    function generateSubsequences(index, subsequence) {
        if (index === str.length) {
            subsequences.push(subsequence);
            return;
        }
        generateSubsequences(index + 1, subsequence);
        generateSubsequences(index + 1, subsequence + str[index]);
    }

    generateSubsequences(0, '');
    return subsequences;
}

 export function lcsBruteForce(X, Y, timeout = 1000) {
    const startTime = Date.now();
    const subsequencesX = getAllSubsequences(X);
    const subsequencesY = getAllSubsequences(Y);

    let longestSubsequence = '';

    for (const subX of subsequencesX) {
        if (Date.now() - startTime > timeout) {
            return 'not found'
        }
        for (const subY of subsequencesY) {
            if (subX === subY && subX.length > longestSubsequence.length) {
                longestSubsequence = subX;
            }
        }
    }

    return longestSubsequence;
}

// // Usage example
// const text1 = "AGGTAB";
// const text2 = "GXTXAYB";

// try {
//     const lcsStr = lcsBruteForce(text1, text2, 1000); // 1000 ms timeout
//     console.log("LCS:", lcsStr);
//     console.log("Length of LCS:", lcsStr.length);
// } catch (error) {
//     console.error(error.message);
// }