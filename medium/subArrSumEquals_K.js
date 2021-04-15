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