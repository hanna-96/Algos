// Given a complete binary tree, count the number of nodes.
// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level
// are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Example:

// Input:
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6

//solution 1
// Time O(n), we're visiting every node in the tree
// Space O(d) = O(log n) to keep the recursion stack, where d is a tree depth
var countNodes = function (root) {
  if (!root) return 0;
  // if(root.left === null && root.right ===null) return 1;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
