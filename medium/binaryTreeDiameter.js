//   Write a function that takes in a Binary Tree and returns its diameter. The
//   diameter of a binary tree is defined as the length of its longest path, even
//   if that path doesn't pass through the root of the tree.

//   A path is a collection of connected nodes in a tree, where no node is
//   connected to more than two other nodes. The length of a path is the number of
//   edges between the path's first node and its last node.
// =        1
//         /   \
//        3     2
//       /   \
//      7     4
//     /       \
//    8         5
//    /           \
//   9              6

//Ouput: 6 //9->8->7->3->4->5->6

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Time O(n),space O(h)
function binaryTreeDiameter(tree) {
  let diameter = 0;
  if (tree === null) return 0;

  function calculateDepth(root, depth = 0) {
    if (root === null) return 0;

    let leftSubtreeDepth = calculateDepth(root.left, depth + 1);
    let rightSubtreeDepth = calculateDepth(root.right, depth + 1);

    diameter = Math.max(leftSubtreeDepth + rightSubtreeDepth, diameter);
    console.log("diameter in branches", diameter);
    return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
  }
  calculateDepth(tree);
  // console.log('diameter',diameter)
  return diameter;
}
