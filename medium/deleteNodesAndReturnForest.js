// Given the root of a binary tree, each node in the tree has a distinct value.

// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

// Return the roots of the trees in the remaining forest.  You may return the result in any order.

// Example 1:
//  Input:
//       1
//     /   \
//     2      3
//    /  \   / \
//    4   5  6  7

// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]

const delNodes = (root, to_delete) => {
  let res = [];
  const set = new Set(to_delete);

  //when we  eventually come back to root from previous recursive calls=>Check if our root needs to be added to the results
  if (!set.has(root.val)) res.push(root);

  deleteNode(root, set, res);
  return res;
};

function deleteNode(node, set, res) {
  //base case: we need to stop calling recursion once we hit all  the leaves of the tree=>So recursion will go back from bottom to top
  if (node === null) return null; //assigning leaf's right and left child to be null

  node.left = deleteNode(node.left, set, res);
  node.right = deleteNode(node.right, set, res);

  if (set.has(node.val)) {
    //because we are comming from botton to current node ,check if its children are not null;
    //If not=> we need to add them to the results array before we move on to another node up
    if (node.left) res.push(node.left);
    if (node.right) res.push(node.right);
    //once we added its left and right childs to res arr=>now we can simply make them null
    return null;
  }
  //in case we don't need to delete current node, then we simply return it (and it automatically gets pushed to res array)
  return node;
}
