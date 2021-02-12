// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Follow up: Can you solve it with time complexity O(height of tree)?

// Example 1:
//     5
//    /  \
//   3    6
//   / \    \
//  2   4    7

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
//     5
//    /  \
//   4    6
//   /     \
//  2        7
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []

const deleteNode = (root, key) => {
  return findAndDelete(root, key);
};

function findAndDelete(root, key) {
  if (!root) return root;
  if (root.val > key) {
    //look in left subtree
    root.left = findAndDelete(root.left, key);
  } else if (key > root.val) {
    root.right = findAndDelete(root.right, key);
  } else {
    //if we found the node to delete
    //if we reached the leaf node(node doen't have any children) then assign it to null nd recursion will go up back
    if (!root.left && !root.right) root = null;
    //if root has one child ,then just assign the reference of the root to the existing child
    else if (!root.left) root = root.right;
    else if (!root.right) root = root.left;
    else if (root.left !== null && root.right !== null) {
      //in case we have 2 children , find the smallest value in the right subTree of the current node we want to delete
      //the lowest left child of the right subtree will be the min val
      let newNode = getMinValue(root.right);
      root.val = newNode.val;
      root.right = findAndDelete(root.right, newNode.val); //call the recursion on the right subtree in order to delete  leaf node that we currently assigned as a new root
    }
  }
  return root;
}
function getMinValue(root) {
  let currentNode = root;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode;
}
