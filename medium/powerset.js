// Write a function that takes in an array of unique integers and returns its
//   powerset. The powerset P(X) of a set X is set of all subsets of X.For example, the powerset of [1,2] is
// [[],[1],[2],[1,2]]

// Note that the sets in the powerset do not need to be in any particular order.
// Input: [1,2,3];
//Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

//Time O(2^n*n); Space O(2^n *n)
//with each iteration(every number we loop through) we're doubling the amount of subsets we currently have
//every time we append an el
function powerset(array) {
  //Iterate through arr of integers
  //At each integer interate through all the subsets and CREATE a new subset with that integer
  let result = [[]];

  for (let el of array) {
    //go through all subsets we currently have and add each integer
    //!!!We ONLY generate new subsets based on the subsets that we CURRENTLY have
    const length = result.length;
    for (let j = 0; j < length; j++) {
      let curSubset = result[j];
      //we take a curSubset( it's [] at the beginning) and ADD a current element to it->([]+1 = [1])
      //[]+2 = [2]
      //[1]+2 = [1,2]
      //[]+3 = [3]
      //[1]+3 = [1,3]
      // [2]+3 = [2,3]
      //[1,2]+3= [1,2,3]
      result.push(curSubset.concat(el));
    }
  }
  return result;
}
