//   Write a function that takes in a sorted array of integers as well as a target
//   integer. The function should use a variation of the Binary Search algorithm to
//   find a range of indices in between which the target number is contained in the
//   array and should return this range in the form of an array.

//   The first number in the output array should represent the first index at which
//   the target number is located, while the second number should represent the
//   last index at which the target number is located. The function should return
//   [-1,-1]  if the integer isn't contained in the array.
//Input  = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73],target = 45
//Output [4,9]

//Tome O(n log n));Space O(1)
function searchForRange(array, target) {
  let left = 0;
  let right = array.length - 1;
  // let mid = Math.floor((left+right)/2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      right = mid - 1;
      left = mid + 1;

      while (array[right] === target) {
        right--;
      }
      while (array[left] === target) {
        left++;
      }
      return [right + 1, left - 1];
    }

    if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [-1, -1];
}
//solution 2
function searchForRange(array, target) {
  const finalRange = [-1, -1];
  helper(array, target, 0, array.length - 1, finalRange, true); //check the left side
  helper(array, target, 0, array.length - 1, finalRange, false); //check the right side
  return finalRange;
}
function helper(array, target, leftIdx, rightIdx, finalRange, goLeft) {
  while (leftIdx <= rightIdx) {
    let mid = Math.floor((leftIdx + rightIdx) / 2);
    if (array[mid] === target) {
      //exlore the left side
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          rightIdx = mid - 1;
        }
      } else {
        //explore right side
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          leftIdx = mid + 1;
        }
      }
    } else if (array[mid] > target) {
      rightIdx = mid - 1;
    } else {
      leftIdx = mid + 1;
    }
  }
}
