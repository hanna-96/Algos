// Given preorder and inorder traversal of a tree, construct the binary tree.
// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

const buildTree = (preorder, inorder) => {
  //in preorder arr root will always be at 1st position
  // The first element in the preorder list is a root. This root splits inorder
  //list into left and right subtrees. Now one have to pop up the root from preorder
  //list since it's already used as a tree node and then repeat the step above for the
  // left and right subtrees.
  let rootIdx = 0;
  let hash = new Map();

  for (let i = 0; i < inorder.length; i++) {
    hash.set(inorder[i], i);
  }
  function helper(start, end) {
    if (start > end) return null;
    //we need to find this root in inorder array so that we can establish it's left and right subtrees
    let root = new TreeNode(preorder[rootIdx]);
    rootIdx++;
    root.left = helper(start, hash.get(root.val) - 1);
    root.right = helper(hash.get(root.val) + 1, end);
    return root;
  }
  return helper(0, inorder.length - 1);
};
