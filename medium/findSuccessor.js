//   Write a function that takes in a Binary Tree (where nodes have an additional
//   pointer to their parent node) as well as a node contained in that tree and
//   returns the given node's successor.
// A node's successor is the next node to be visited (immediately after the given
//     node) when traversing its tree using the in-order tree-traversal technique. A
//     node has no successor if it's the last node to be visited in the in-order
//     traversal.
// If a node has no successor, your function should return null.

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
//solution 1
// Time O(n),space O(n); where n is the amount of nodes in the tree
function findSuccessor(tree, node) {
  //left->root->right
  let visited = visitAllNodes(tree);
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === node) return visited[i + 1];
  }
}
function visitAllNodes(tree, visited = []) {
  if (tree === null) return visited;
  if (tree.left) visitAllNodes(tree.left, visited);
  visited.push(tree);
  if (tree.right) visitAllNodes(tree.right, visited);
  return visited;
}
