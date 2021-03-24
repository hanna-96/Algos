// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6

var maxProfit = function (prices, fee) {
  let buy = new Array(prices.length).fill(0);
  let sell = new Array(prices.length).fill(0);
  buy[0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]); //either not buy at current day OR sell the previous and buy a new one
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee); //0 5
  }

  return sell[sell.length - 1];
};
