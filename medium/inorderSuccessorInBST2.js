/*
    Given a node in a binary search tree, return the in-order successor of that node in the BST. If that node has no in-order successor, return null.
The successor of a node is the node with the smallest key greater than node.val.
You will have direct access to the node but not to the root of the tree. Each node will have a reference to its parent node. Below is the definition for Node:
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
 

Example 1:

        2    
       /  \     
     1     3    

Input: tree = [2,1,3], node = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both the node and the return value is of Node type.
        we need to find out where node is located,
        1) if node has a right child than return right child's left
        most child
        2) if we don't have a right child compare if the parent. If parent  is
        smaller than current node update the node, and move up until we find a parent that is >

    */
var inorderSuccessor = function (node) {
  let smallestKey = Infinity;
  if (!node.parent && !node.right) return null;

  // if there is a right subtree=> look for sucessor at the leftmost side of the right subtree
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  } else {
    //so if I can't go to the right => go up to the parent node until parent is > than node
    while (node.parent && node.parent.val < node.val) {
      node = node.parent;
    }
    return node.parent;
  }
};
