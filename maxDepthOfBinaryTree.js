//Time O(n),SPace worst case(tree is unbalanced) O(n); average case(balanced tree) O(log n)
var maxDepth = function (root) {
    if (!root) return 0;
    let stack = [{ node: root, depth: 1 }];
    let maxDepth = 0;
    while (stack.length) {
      let { node, depth } = stack.pop();
  
      if (node) {
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) stack.push({ node: node.left, depth: depth + 1 });
        if (node.right) stack.push({ node: node.right, depth: depth + 1 });
      }
    }
    return maxDepth;
  };
  
  //recursive solution
  var maxDepth = function (root) {
    if (!root) return 0;
    let leftTreeDepth = maxDepth(root.left);
    let rightTreeDepth = maxDepth(root.right);
  
    return Math.max(leftTreeDepth, rightTreeDepth) + 1;
  };
  