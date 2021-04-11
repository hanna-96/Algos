/*
Find p and q positions in the tree
1. Count the depth of p and q
- if the depth
2.Whataver node is more down  Move it up until they are both at the same level
3. Start moving up by using parent pointers.Once they are === return

Time O(n), Space O(n);
*/
var lowestCommonAncestor = function (root, p, q) {
  // Search for the nodes, and add a parent chain while doing that
  // After finding both, go up each node's parent chain till we find the
  // the same common ancestor for both nodes.

  // we will keep track of level
  let foundP, foundQ;
  root.depth = 0;
  root.parent = null;

  let stack = [root];
  // while we have nodes to consider and we haven't found p and q nodes yet

  while (stack.length && !(foundP && foundQ)) {
    let currentNode = stack.pop();
    if (currentNode) {
      if (currentNode.val === p.val) foundP = currentNode;
      if (currentNode.val === q.val) foundQ = currentNode;

      if (currentNode.left) {
        currentNode.left.depth = currentNode.depth + 1;
        currentNode.left.parent = currentNode;
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        currentNode.right.depth = currentNode.depth + 1;
        currentNode.right.parent = currentNode;
        stack.push(currentNode.right);
      }
    }
  }
  // Now, for both p and q nodes we know the parent chain,
  // we move up the chain until it's the same node. That is the LCA
  // To make sure we move up in the right order, we use the level property added during the dfs

  while (foundP.val !== foundQ.val) {
    if (foundP.depth > foundQ.depth) {
      foundP = foundP.parent;
    } else if (foundQ.depth > foundP.depth) {
      foundQ = foundQ.parent;
    } else {
      foundP = foundP.parent;
      foundQ = foundQ.parent;
    }
  }
  return foundP;
};
