//   The pre-order traversal of a Binary Tree is a traversal technique that starts
//   at the tree's root node and visits nodes in the following order:
//   Current node
//   Left subtree
//   Right subtree

//   Given a non-empty array of integers representing the pre-order traversal of a
//   Binary Search Tree (BST), write a function that creates the relevant BST and
//   returns its root node.

//   The input array will contain the values of BST nodes in the order in which
//   these nodes would be visited with a pre-order traversal.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
//Time O(n^2); Space O(h), where h - is height of the tree (number of recursive calls in a callstack)
function reconstructBst(preOrderTraversalValues) {
  //once we reach a leaf node =>return null and recursion bubbles back
  if (preOrderTraversalValues.length === 0) return null;
  let root = preOrderTraversalValues[0]; // 10 4
  let rightSubtreeIdx = preOrderTraversalValues.length;
  ///lets find the first appearence of right subtree

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    if (preOrderTraversalValues[i] >= root) {
      rightSubtreeIdx = i;
      break;
    }
  }
  //before we create out final BST let's first create its left subtree and right subtree
  const leftSubTree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeIdx)
  );
  // console.log('left',leftSubTree)
  const rightSubTree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeIdx)
  );
  // console.log('rightSubTree',rightSubTree)
  return new BST(root, leftSubTree, rightSubTree);
}
