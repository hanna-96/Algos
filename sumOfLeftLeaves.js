// Find the sum of all left leaves in a given binary tree.
// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

//solution 1 iterative(pre order traversal)
//time O(n)
// Space O(n)
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  let stack = [root];
  if (root === null) return 0;
  while (stack.length) {
    let node = stack.pop(); //3
    //check if it's the leaf node!(node that doesn't have any children)
    if (node.left && node.left.left === null && node.left.right === null) {
      sum = sum + node.left.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) {
      stack.push(node.right);
    }
  }
  return sum;
};
//recursive solution
// var sumOfLeftLeaves = function(root) {
//     let sum = 0;
//     if(root === null) return 0;
//     if(root.left && root.left.left ===null && root.left.right===null){
//     sum+= root.left.val;
//       }else{
//           sum += sumOfLeftLeaves(root.left);
//       }
//     if(root.right){
//         if(root.right.left!==null || root.right.right!==null){
//           sum += sumOfLeftLeaves(root.right)
//         }
//     }
//     return sum;
// };
