// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

// Time Complexity: O(N). We visit every node once.

// Space Complexity: O(N), the size of our implicit call stack during our depth-first search.

function diameterOfBinaryTree(root) {
  // find the longest path of left subtree(exluding root);
  // 	find the elongest path of right subtree(excluding root)
  // 	combine the lengths of those paths + 1(root)
  // 	find the longest path including root
  let diameter = 0;

  // helper function will return the longest path between left or right tree + root node
  function getLongestPath(root) {
    if (root === null) return 0;
    const leftHeight = getLongestPath(root.left);
    const rightHeight = getLongestPath(root.right);
    const longestPathSoFar = leftHeight + rightHeight; // <- means a diameter
    // update the diameter if left_path plus right_path is larger
    diameter = Math.max(diameter, longestPathSoFar);
    // returning the length of the longest branch between a node's left and right branches.
    // remember to add 1 for the path connecting the node and its parent
    return Math.max(leftHeight, rightHeight) + 1;
  }
  getLongestPath(root);
  return diameter;
}
