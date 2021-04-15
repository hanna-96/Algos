/*
  Write a function that takes in a Binary Search Tree (BST) and a positive
  integer k  and returns the kth largest integer contained in the
  BST.
  You can assume that there will only be integer values in the BST and that
  k  is less than or equal to the number of nodes in the tree.
  Also, for the purpose of this question, duplicate integers will be treated as
  distinct values. In other words, the second largest value in a BST containing
  values [5,7,7] will be 7 not 5.


  My approach:
The largest value in BST will be a;ways the leaf right node of the tight child of the root
1.Go all the way down the right subtree => visit the lead right node => visit the root=> visit the left node
2. Eventually we'll have a sorted array of all node values from the tree.
3. Return the k th node from array.
Time O(n + k),Space O(h),where h is the height of the tree and k is input parameter
*/
function findKthLargestValueInBst(tree, k) {
  if (!tree) return null;
  const nodes = findtheLargest(tree, k);
  return nodes[k - 1];
}
function findtheLargest(tree, k, arr = []) {
  if (!tree || arr.length >= k) return;

  findtheLargest(tree.right, k, arr);
  arr.push(tree.value);
  findtheLargest(tree.left, k, arr);
  return arr;
}
