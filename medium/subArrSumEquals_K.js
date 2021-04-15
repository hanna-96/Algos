//Time O(n^2);Space O(1);
var subarraySum = function (nums, k) {
  let total = 0;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum === k) {
        total++;
      }
    }
  }
  return total;
};

//Optimal Solution Time O(n), Space O(1);

var subarraySum = function (nums, k) {
  let map = new Map();
  let prefixSum = 0;
  let count = 0;
  //the key is the culminative sum, value is the  number of times we saw this sum
  map.set(0, 1); //sum = 0, we've seen it 1 time  initially

  //!!!if the cumulative sum up to two indices, say i and j is at a difference of k i.e. if sum[i] - sum[j] = ksum[i]−sum[j]=k, the sum of elements lying between indices i and j is k.

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]; //1
    //have we seen sum - k before?
    //if we did then we 've seen the array of size k' since the last time we added it to map
    //starting from the point where we first saw the sum that equals sum-k AND the point of our current sum=>
    //IT MEANS the sum of numbers between these two points === k  =>AND THAT IS OUR 1st SUBARRAY
    // for every sum encountered, we also determine the number of times the sum sum−k has occurred already, since it will determine the number of times a subarray with sum kk has occurred up to the current index.
    if (map.has(prefixSum - k)) count += map.get(prefixSum - k); //1, 3
    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }
  return count;
};
