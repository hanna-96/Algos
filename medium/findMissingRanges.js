function findMissingRanges(nums, lower, upper) {
  const res = [];
  //add  one less than lower num to the beginning and one more than upper at the end
  nums = [lower - 1, ...nums, upper + 1];
  //there can be several options
  //1.nothing is missing
  //2.1 number is missing in between
  //3.more then 1 number is missing in between
  //4. some numbers are missing before the start number//5. some numbers are missing after last number in the array;
  //!!!Consider erdge cases:
  //1.there might be some numbers missing before even the 1st number in the array(if first number > lower)
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    console.log("differemce", diff);

    if (diff === 2) {
      // exactly one number is missing in between
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      //if diff > 2 then some number are definitley missing
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }
  return res;
}
