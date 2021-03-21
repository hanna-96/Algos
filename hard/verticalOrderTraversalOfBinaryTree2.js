// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

// Example 1:
//       3
//      /  \
//     9    20
//          /  \
//         15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Column -1: Only node 9 is in this column.
// Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
// Column 1: Only node 20 is in this column.
// Column 2: Only node 7 is in this column.
// Example 2:
//        1
//      /   \
//     2      3
//    /  \   /  \
//   4    6  5   7

// Input: root = [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation:
// Column -2: Only node 4 is in this column.
// Column -1: Only node 2 is in this column.
// Column 0: Nodes 1, 5, and 6 are in this column.
//           1 is at the top, so it comes first.
//           5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.
// Column 1: Only node 3 is in this column.
// Column 2: Only node 7 is in this column.

//Time O(n log n);
//Space O(n)
var verticalTraversal = function (root) {
  let map = new Map();
  if (!root) return res;
  let res = [];
  let queue = [[root, 0, 0]];

  while (queue.length) {
    let [currentNode, row, col] = queue.shift();

    if (currentNode) {
      res.push([currentNode.val, row, col]);
      queue.push([currentNode.left, row + 1, col - 1]);
      queue.push([currentNode.right, row + 1, col + 1]);
    }
  }

  res.sort((a, b) => a[2] - b[2] || a[1] - b[1] || a[0] - b[0]); //sorting by col, by row, by val

  for (let [node, row, col] of res) {
    if (!map.has(col)) map.set(col, [node]);
    else {
      let nodes = map.get(col);
      nodes.push(node);
    }
  }

  return [...map.values()];
};
