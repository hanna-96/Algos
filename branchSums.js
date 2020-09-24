//write a function that takes in a BST and returns a list of its
// branch sums ordered from leftmost branch sum to rightmost branch sum.
//A branch sum is the sum of all values in a Binary tree branch.
//input:   1
//        / \
//       2   3
//      / \  / \
//     4   5 6 7
//    / \ /
//   8  9 10
//output [15,16,18,10,11]

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sums = [], sum = 0) {
  // Write your code here.
  sum += root.value; //1
  //base case
  if (!root.right && !root.left) {
    //if we reached the leaf node(the deepest one) then
    //push the calculated sum of the nodes from current branch
    sums.push(sum);
  }
  if (root.left) {
    branchSums(root.left, sums, sum);
  }
  if (root.right) {
    branchSums(root.right, sums, sum);
  }
  return sums;
}
