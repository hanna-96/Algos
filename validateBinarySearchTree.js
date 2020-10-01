// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
//Example 1:

//    10
//    / \
//    5   15
//   / \  / \
//  2  5  13  22
//  /      \
//  1      14

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//time O(n)  , n=every node in the tree
//space O(d), d=depth of tree(will use space in the callstack)
function validateBst(tree) {
  // Write your code here.
  return validateBSTHelper(tree, -Infinity, Infinity);
}
function validateBSTHelper(tree, min, max) {
  //if we reach a leaf node(bottom of the tree) -> we are done with traversing a tree
  if (tree === null) return true;
  //every node has a min possible value and a max  possible value
  //check if a current node is between the min value and max value
  //if not -> it's not  a BSt
  //max value should be >= to that node
  //min value shoud be < then node
  if (tree.value >= max || tree.value < min) return false;
  // if yes then check if its left subtree is valid as well as its right subtree
  return (
    validateBSTHelper(tree.left, min, tree.value) &&
    validateBSTHelper(tree.right, tree.value, max)
  );
}
