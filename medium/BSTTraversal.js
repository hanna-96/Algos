//Write three functions that traverse a BST (In-order, pre-order,post-order);

//Input :    =   10
//             /     \
//             5      15
//            /   \       \
//           2    5        22
//          /
//        1
//Output: inorder : : [1, 2, 5, 5, 10, 15, 22]
//pre order : : [10, 5, 2, 1, 5, 15, 22]
//post order : [1, 2, 5, 5, 22, 15, 10]
//Time O(n);space O(n)
function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    if (tree.left) inOrderTraverse(tree.left, array);
    array.push(tree.value);
    if (tree.right) inOrderTraverse(tree.right, array);
  }
  return array;
}
//Time O(n);space O(n)
function preOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    array.push(tree.value);
    if (tree.left) preOrderTraverse(tree.left, array);
    if (tree.right) preOrderTraverse(tree.right, array);
  }
  return array;
}
//Time O(n);space O(n)
function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree) {
    if (tree.left) postOrderTraverse(tree.left, array);
    if (tree.right) postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
