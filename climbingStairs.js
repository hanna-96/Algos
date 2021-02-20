// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//TIME O(n),space O(n)
const climbStairs = (n) => {
  //bottom up  approach
  // starting from the lowest stair=> figure out how many ways we can get to each stair

  //base case: to climb 0 stairs there's ONLY 1 way => Not to climb any stairs
  //to get to 1st stair there's ONLY 1 way => to climb to make 1step
  let diffWays = new Array(n + 1);
  diffWays[0] = 1;
  diffWays[1] = 1;
  for (let i = 2; i <= n; i++) {
    // in how many ways can we get to current stair(i)?
    //Well,we can get from the 1 stair below current stair AND from the stair that is 2 steps below current stair
    //AND we know we already calculated how we could get to those stairs
    //So just sum them up
    diffWays[i] = diffWays[i - 1] + diffWays[i - 2];
  }
  return diffWays[n];
};
