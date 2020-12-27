//   Write a function that takes in an array of unique integers and returns an
//   array of all permutations of those integers in no particular order.
//   If the input array is empty, the function should return an empty array.

// Input: [1,2,3]
// Output: [[1,2,3],[1,3,2],]

//optimal solution
//Time O(n*n!); (n! because of number of all possible permutations, n because we store all perms in arrays)
// space O(n*n!) ,because we've got n! permutations and we're storing all of them in the arr with n length
function getPermutations(array) {
  // 	put all the nums coming after this position INTO this position
  let perms = [];
  helperFunc(0, array, perms);
  return perms;
}
//iterate through input array and build our perms inside the input arr by swapping numbers(their positions)
//The plan is:
// First, we get all the possible perms with number 1 at the first position.([1,2,3],[1,3,2]);
//then we want all possible perms with number 2 at the 1st position([2,1,3],[2,3,1])
// then we want all possible perms with number 3 at the 1st position([3,2,1],[3,1,2])
//and so on...until we get all the perms with the last number (from input arr) at the 1st position
function helperFunc(i, array, perms) {
  if (i === array.length - 1) {
    //this 'if' happens n! times
    perms.push(array.slice()); //copying is O(n)
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array); //O(1)
      helperFunc(i + 1, array, perms); // total calls are made n*n!
      swap(i, j, array);
    }
  }
}
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//As a result We swapped every number after the current number.For every time we swapped that number,
//wd swapped every number after it Until we came to the final number.

//another solution
function getPermutations(array) {
  // Write your code here.
  let res = [];
  helperPerms(array, [], res);
  console.log("results", res);
  return res;
}
function helperPerms(array, curPermutation, res) {
  //check if we still have numbers left in the input array so we can build permutations
  if (!array.length && curPermutation.length) {
    res.push(curPermutation); // n! times
  } else {
    for (let i = 0; i < array.length; i++) {
      //O(n)
      //make a new arr but remove the first num from the array
      let newArr = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = curPermutation.concat([array[i]]); //adding the num we removed above
      helperPerms(newArr, newPerm, res);
    }
  }
}
