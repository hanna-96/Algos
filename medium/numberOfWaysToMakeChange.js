//   Given an array of distinct positive integers representing coin denominations and a
//   single non-negative integer  n  representing a target amount of
//   money, write a function that returns the number of ways to make change for
//   that target amount using the given coin denominations.
// Note that an unlimited amount of coins is at your disposal.

// Input: n=6,denoms = [1,5];
// Output: 2 //because there're 2 ways to make 6 by using 1 and 5 denoms.(1*1 + 1*5 and 6*1)

//Time O(n*d); space O(n), where  n is the target amount and d is the number of coin denominations
function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  // make an array to store a min number of ways to make change between 0 and n
  //each index will represent a specific amount of money and will go up to the target amount(n)
  //every value at each idx will be the min number of ways that we have to make
  //change using the denominations to make change for the amount that is represented by idx

  //the value at idx 0 will always be 1 (because there's only 1 way to make 0 => NOT TO MAKE ANY CHANGE)

  //Iterate through denominations array
  //for each denomination iterate through all the amounts of ways and update the number of ways
  //in order to make that amount(target amount ===curIdx)
  //compare the denomination with a target amount

  //EX: the number of ways to make 2 by using only 1$ coins === 1 (adding 1$+1$)

  let ways = new Array(n + 1).fill(0); //n+1 because we add 0 at the beginning
  ways[0] = 1; //the value at idx 0 will always be 1 (because there's only 1 way to make 0
  // => NOT TO MAKE ANY CHANGE)

  for (let coin of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      //can we use a current coin(from denom to make change to the current amount(idx))
      if (coin <= amount) {
        ways[amount] += ways[amount - coin];
      }
    }
  }
  return ways[ways.length - 1];
}
