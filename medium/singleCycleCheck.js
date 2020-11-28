//PROMPT: You're given an array of integers where each integer represents a jump of its   value in the array.
//For instance, the integer  2  represents a jump of two indices forward in the array;
//the integer -3  represents a jump of three indices backward in the array.

// If a jump spills past the array's bounds, it wraps over to the other side.
// For  instance, a jump of -1 at index 0  brings us to the last index in
//   the array. Similarly, a jump of 1 at the last index in the array brings us to index 0

// Write a function that returns a boolean representing whether the jumps in the
// array form a single cycle. A single cycle occurs if, starting at any index in
// the array and following the jumps, every element in the array is visited
// exactly once before landing back on the starting index.
//Input  array= [2, 3, 1, -4, -4, 2]
// Output : true

//time O(n); space O(1)
function hasSingleCycle(array) {
  // Write your code here.
  //keep track of the currentIdx and jumpIdx
  //currentIdx+ jumpIdx = newIdx (points to integer from tha array)
  let currentIdx = 0;

  //track how many timewe visit each integer
  let count = 0;
  //need to visit all elements in the array
  while (count < array.length) {
    //1st edge case :if we  visitied integer more than 1 time
    //and we came back to the first integer =>FALSE
    if (currentIdx === 0 && count > 0) return false;
    count++;
    let jumpIdx = array[currentIdx];

    //find a newIdx that will point to the next needed element
    let newIdx = (currentIdx + jumpIdx) % array.length; //% length because newIdx can become > than array.length
    //so we need to start over from the beginning

    //2nd EDGE case:if newIdx ecomes a negative integer=>we need to forward it to start pointing from the end

    if (newIdx < 0) {
      newIdx = newIdx + array.length;
    }
    currentIdx = newIdx;
  }
  //ONly if we visited all elements AND returned back from where we started(at 0 idx)=>TRUE
  return currentIdx === 0;
}
