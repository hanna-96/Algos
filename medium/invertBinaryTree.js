// write a function that in a Binary Tree and inverts it.In other words,the function should swapevery left node
// in the tree for its corresponding right node.

//recursive solution
// Time O(n); Space O(d);,where d is the depth to the longest leaf node
function invertBinaryTree(tree) {
  // Write your code here.
  if (tree === null) return;
  swapNodes(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapNodes(tree) {
  let left = tree.left;
  let right = tree.right;
  tree.left = right;
  tree.right = left;
}
//iterative solution (using queue)
//   Time O(N);Space O(N)
function invertBinaryTree(tree) {
  // Write your code here.
  // if(tree===null) return;
  let queue = [tree];
  while (queue.length) {
    let curParent = queue.shift();
    if (curParent === null) continue; //NOT BREAK because there might be a second child of this node
    swapNodes(curParent);
    queue.push(curParent.left);
    queue.push(curParent.right);
  }
}
function swapNodes(root) {
  let left = root.left;
  let right = root.right;
  root.left = right;
  root.right = left;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
