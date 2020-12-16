//   Write a function that takes in a non-empty sorted array of distinct integers,
//   constructs a BST from the integers, and returns the root of the BST.
// The function should minimize the height of the BST.

// You've been provided with a BST class that you'll have to use to
// construct the BST.Note that the insert method is already given.

// Input  = [1, 2, 5, 7, 10, 13, 14, 15, 22]

// Output
//    10
//   /     \
//   2      14
// /   \   /   \
// 1     5 13   15
//  \       \
//   7      22

// solution 1  TimeO(n);space O(n)

function minHeightBst(array) {
  // Write your code here.
  return constructTree(array, 0, array.length - 1);
}
//goal is to minimize Both sides of the tree so that BST has a minHeight(make it as balanced as it could be)
//try to make nodes in the left side be almost the same amount as in right side
function constructTree(array, leftIdx, rightIdx) {
  if (rightIdx < leftIdx) return null;

  let middle = Math.floor((leftIdx + rightIdx) / 2);
  let root = new BST(array[middle]); //we chose el in the middle because it has the same amount of values
  // 	to its left and to its right(because the input array is sorted)
  root.left = constructTree(array, leftIdx, middle - 1); //continue building root's left tree appluying the same logic
  root.right = constructTree(array, middle + 1, rightIdx); //building root's right subtree..
  return root;
}

//solution 2 Time O(n log n); Space O(n);
function minHeightBst(array) {
  // Write your code here.
  return buildTree(array, null, 0, array.length - 1);
}
function buildTree(array, root, leftIdx, rightIdx) {
  if (rightIdx < leftIdx) return;

  let middle = Math.floor((leftIdx + rightIdx) / 2);

  if (root === null) {
    root = new BST(array[middle]);
  } else {
    root.insert(array[middle]);
  }
  buildTree(array, root, leftIdx, middle - 1);
  buildTree(array, root, middle + 1, rightIdx);
  return root;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
