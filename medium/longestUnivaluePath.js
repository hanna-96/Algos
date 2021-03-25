// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

// The length of the path between two nodes is represented by the number of edges between them.

// Example 1:
//           5
//          /  \
//          4   5
//         / \    \
//        1  1     5

// Input: root = [5,4,5,1,1,5]
// Output: 2

//Time O(n), Space O(H), where H is the height of th tree(number of recursive calls)
var longestUnivaluePath = function (root) {
  if (!root) return root;
  let maxLength = 0;

  function DFS(node) {
    if (!node) return;
    let left = DFS(node.left); //for each node's leftsubtree
    let right = DFS(node.right); //for each node's rightsubtree
    let leftSideLength = 0;
    let rightSideLength = 0;

    if (node.left && node.left.val === node.val) {
      leftSideLength = 1 + left;
    }
    if (node.right && node.right.val === node.val) {
      rightSideLength = 1 + right;
    }

    maxLength = Math.max(leftSideLength + rightSideLength, maxLength);
    return Math.max(leftSideLength, rightSideLength);
  }
  DFS(root);
  return maxLength;
};
