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
  return countNodes(root.left) + countNodes(root.right) + 1;
};
//solution 2 (covers a case of a perfect complete tree)
//if it's perfect tree ->Time: O(h),where h is height
// if not a perfect Time:O(n)
var countNodes = function (root) {
  //case 1 :check if it is a perfect binary tree(all levels are fully completed) and
  // number of nodes are = 2^h -1
  let leftHeight = 0;
  let rightHeight = 0;
  let pRight = root;
  let pLeft = root;

  //now using pointers let's get the number of nodes to root's left

  while (pLeft !== null) {
    leftHeight++;
    pLeft = pLeft.left;
  }
  //how many nodes in the right subtree
  while (pRight !== null) {
    rightHeight++;
    pRight = pRight.right;
  }

  //check if this complete binary tree is perfect
  if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;

  //case 2:not perfect
  return countNodes(root.left) + countNodes(root.right) + 1;
};
