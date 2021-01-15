// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and
//choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
//If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//optimized solution
//Time O(n);
// space O(1);
const maxProfit = (prices) => {
  let maxProfit = 0;
  let curPrice = prices[0];

  for (let x of prices) {
    if (curPrice < x) maxProfit = Math.max(maxProfit, x - curPrice);
    else curPrice = x;
  }
  return maxProfit;
};

//brute force solution
//Time O(n^2); Space O(1);
const maxProfit = (prices) => {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        result = Math.max(result, prices[j] - prices[i]);
      }
    }
  }
  return result;
};
