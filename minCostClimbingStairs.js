// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999].

//Time O(n), Space O(n)
var minCostClimbingStairs = function (cost) {
  let finalCost = [];
  finalCost[0] = cost[0];
  finalCost[1] = cost[1];
  //calculate the minimum cost to step on each stair starting from the bottom;
  //for aech stair compare is it better to reach it from the previous step OR from the one before the previous
  for (let i = 2; i < cost.length; i++) {
    finalCost[i] = Math.min(
      finalCost[i - 1] + cost[i],
      finalCost[i - 2] + cost[i]
    );
  }
  return Math.min(
    finalCost[finalCost.length - 1],
    finalCost[finalCost.length - 2]
  );
};
