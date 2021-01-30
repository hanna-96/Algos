// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
// Your score is the sum of the points of the cards you have taken.
// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However,
// choosing the rightmost card first will maximize your total score.
//The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.

//solution 1
//Time O(n),Space O(1)
var maxScore = function (cardPoints, k) {
  //sliding window
  //we will use this approach to keep track of the numbers we haven't picked
  //we will subtract the sum of the sliding window from the total sum of the array
  //And that's how we'll keep trak of the max scores we can make based on our moves

  let sumOfNotSelectedCards = 0; //will represent the sum of numbers that we haven't selected
  let maxScore = 0;
  let totalSum = cardPoints.reduce((cur, sum) => sum + cur, 0); //summ of elements in the array
  if (cardPoints.length === k) return totalSum;
  let left = 0;
  let right = 0;

  while (right < cardPoints.length) {
    sumOfNotSelectedCards += cardPoints[right]; //keep adding cards that we don't select
    //and we will not select length-k numbers at any given point in time
    let numberOfNotSelectedCards = cardPoints.length - k;
    //as soon as we counted all the numbers that shouldn't be selected
    if (right - left + 1 === numberOfNotSelectedCards) {
      maxScore = Math.max(maxScore, totalSum - sumOfNotSelectedCards);
      sumOfNotSelectedCards -= cardPoints[left]; //substract the previously added card
      left++; //move on to the next card
    }
    right++;
  }
  return maxScore;
};
//solution 2
var maxScore = function (cardPoints, k) {
  let currentScore = 0;
  let maxScore = 0;
  let totalSum = cardPoints.reduce((cur, sum) => sum + cur, 0);
  if (cardPoints.length === k) return totalSum;
  let windowSum = 0; //will represent the sum of numbers that we haven't selected
  //and we will not select length-k numbers at any given point in time
  let length = cardPoints.length;
  //length-k are all the numbers that we haven't selected

  //sum up the first length-k numbers
  for (let i = 0; i < length - k; i++) {
    windowSum += cardPoints[i]; //calculating the sum of the sliding window
  }
  console.log("initial windowSize", windowSum);
  let res = totalSum - windowSum; //our first potential result(assuming we selected the last three cards)

  //now let's slide the window and add a new number to it AND remove the oldest number
  for (let i = length - k; i < cardPoints.length; i++) {
    windowSum += cardPoints[i] - cardPoints[i - (length - k)];
    //with each iteration we check if we have a new number that is greater then the previously added number
    res = Math.max(res, totalSum - windowSum);
  }
  return res;
};
