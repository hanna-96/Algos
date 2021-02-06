// You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).

// We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() should return the integer proportional to its weight in the w array.
// For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

// More formally, the probability of picking index i is w[i] / sum(w).
// Example 1:

// Input
// ["Solution","pickIndex"]
// [[[1]],[]]
// Output
// [null,0]

// Explanation
// Solution solution = new Solution([1]);
// solution.pickIndex(); // return 0. Since there is only one single element on the array the only option is to return the first element.
// Example 2:

// Input
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// Output
// [null,1,1,1,1,0]

// Explanation
// Solution solution = new Solution([1, 3]);
// solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has probability of 3/4.
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has probability of 1/4.

// Since this is a randomization problem, multiple answers are allowed so the following outputs can be considered correct :
// [null,1,1,1,1,0]
// [null,1,1,1,1,1]
// [null,1,1,1,0,0]
// [null,1,1,1,0,1]
// [null,1,0,1,0,0]
// ......
// and so on.

//Prefix sum:
//y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
//...
var Solution = function (w) {
  this.prefixSum = []; //[1,4]//Prefix sum(or cumulative sum) is the sum of all previous numbers in the sequence plus the number itself.
  this.totalSum = 0; //eventually will use for making our random number higher
  for (let i = 0; i < w.length; i++) {
    this.totalSum += w[i];
    this.prefixSum[i] = this.totalSum;
  }
};
// In other words, the probability that a number got picked is proportional to the value of the number, with regards to the total sum of all numbers.
Solution.prototype.pickIndex = function () {
  //if we throw a ball for example and chances that it will land in the range of the largest number
  //the probability of the larger number will be always > then smaller ones
  //larger number will always occupy a wider range (for example on a —--->x line)
  //probabbility of i = w[i]/sum(w)

  let target = Math.random() * this.totalSum; //increase the value of random number by totalSum, otherwise it will be very small
  
  
  //  loop through prefixSum and find the first prefix sum that is larger than our target offset.
  for(let i=0;i<this.prefixSum.length;i++){
  if(this.prefixSum[i] > target){
  return i;// And the index of this prefix sum would be exactly the right place that the target should fall into
  }

  }

  //solution 2 (binary search)
  Solution.prototype.pickIndex = function () {

  let start = 0;
  let end = this.prefixSum.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (target > this.prefixSum[middle]) {
      end = middle - 1;
    } else if (target < this.prefixSum[middle]) {
      start = middle + 1;
    }
  }
  console.log("result", end);
  return end;
};
