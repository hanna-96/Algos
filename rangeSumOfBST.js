// Given the root node of a binary search tree, return the sum of values of all
//nodes with a value in the range [low, high].

// Example 1:
//        10
//        / \
//     5     15
//     /\     \
//     3 7     17

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Example 2:
//          10
//         /  \
//        5    15
//     /   \  /  \
//     3    7  13 18
//    /     /
//    1     6

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
//Time O(N); SPace O(N), where N is the number of nodes in the tree
const rangeSumBST = (root, low, high) => {
  //add to the sum only that node that is in between[low,high];
  let sum = 0;
  travesreTree(root, low, high);

  function travesreTree(root, low, high) {
    if (root) {
      if (isInRange(root, low, high)) {
        sum += root.val; //10+7+15
        travesreTree(root.left, low, high);
        travesreTree(root.right, low, high);
      } else if (root.val > low) {
        travesreTree(root.left, low, high);
      } else if (root.val < low) {
        travesreTree(root.right, low, high);
      }
    }
  }
  return sum;
};

function isInRange(node, low, high) {
  return node.val >= low && node.val <= high;
}
//solution 2 (using stack);
const rangeSumBST2 = (root, low, high) => {
  let total = 0;
  let stack = [];
  // init stack
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    if (!node) continue;

    if (node.val < low) {
      if (node.right) stack.push(node.right);
    } else if (node.val > high) {
      if (node.left) stack.push(node.left);
    } else {
      total += node.val;
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  return total;
};
