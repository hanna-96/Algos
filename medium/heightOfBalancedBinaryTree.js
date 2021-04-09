/*
1.Find the height of left and right subtrees of every singly node;
2. Height is the
 number of nodes along the longest path from the root node
down to the farthest leaf node + 1.
3. Check the difference between left and right height and then call recursively the same function on every single node in the tree
to check if he is balanced.
4. Only if all the nodes are balanced => return true;

Time O(n), we visit all nodes; Space O(h), height determined the number of recursive calls in callstack
*/

function heightBalancedBinaryTree(tree) {
  if (tree === null) return true;
  const leftHeight = findHeight(tree.left);
  const rightHeight = findHeight(tree.right);

  // checking if the diff between left and right subtrees(!!starting fron the main root) is <=1 AND
  // AND we must check every single left and right subtree for balanced seperately
  // Because if at least one of the subtrees is not balanced we return false!
  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    heightBalancedBinaryTree(tree.left) &&
    heightBalancedBinaryTree(tree.right)
  );
}
//calculate heightfor left tree and right tree
function findHeight(root) {
  if (root === null) return 0;
  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}
