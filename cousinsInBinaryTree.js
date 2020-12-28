// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Example 1:
//    1
//   / \
//. 2   3
// /
//4
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Example 2:
//      1
//     / \
//    2   3
//    \   \
//     4   5

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

var isCousins = function (root, x, y) {
  const [parentX, depthX] = getParentAndDepth(root, x, null, 0);
  const [parentY, depthY] = getParentAndDepth(root, y, null, 0);

  return parentX !== parentY && depthX === depthY;
};

function getParentAndDepth(root, nodeToFind, parent, depth) {
  let stack = [[root, parent, depth]];
  while (stack.length) {
    let [curr, parent, depth] = stack.pop();
    if (curr.val === nodeToFind) {
      return [parent, depth];
    } else {
      if (curr.left) stack.push([curr.left, curr, depth + 1]);
      if (curr.right) stack.push([curr.right, curr, depth + 1]);
    }
  }
}
