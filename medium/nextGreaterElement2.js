function nextGreaterElement(array) {
  /*
1.	create stack and store the indeces of elements from input array that are not > then the current
	element we are comparing to.
2. If element > array[stack[stack.length - 1]] 	=> pop() and assign it as an el in a new arr
3. if <  || !stack.length then push i to stack 
4. return resArr
	*/
  let res = new Array(array.length).fill(-1);
  let stack = [];
  for (let i = 0; i < 2 * array.length; i++) {
    let currentIdx = i % array.length; // need it because the array is circular.

    while (stack.length && array[stack[stack.length - 1]] < array[currentIdx]) {
      res[stack[stack.length - 1]] = array[currentIdx];
      stack.pop();
    }
    stack.push(currentIdx);
  }
  return res;
}

/*
  Write a function that takes in an array of integers and returns a new array
  containing, at each index, the next element in the input array that's greater
  than the element at that index in the input array.

  In other words, your function should return a new array where outputArray[i] 
   is the next element in the input array that's greater than inputArray[i].
 If there's no such next greater element for a particular index, 
 the value at that index in the output array should be -1. For example given array 
 [1,2] return [2,-1].

  Additionally, your function should treat the input array as a circular  array. A circular array wraps around itself as if it were
  connected end-to-end. So the next index after the last index in a circular
  array is the first index. This means that, for our problem, given array = [0, 0, 5, 0, 0, 3, 0 0]
  ., the next greater element after 3 is 5 , since the array is circular.

  Input = [2, 5, -3, -4, 6, 7, 2];
  Output = [5, 6, 6, 6, 7, -1, 5]
  
  
*/
