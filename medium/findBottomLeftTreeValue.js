
//Time O(n),Space O(n);
var findBottomLeftValue = function (root) {
    if (root === null) return null;
    let maxDepth = -Infinity;
    let resultNode = root.val;
  
    function DFS(root) {
      if (root === null) return;
  
      let stack = [{ node: root, depth: 1 }];
  
      while (stack.length) {
        let { node, depth } = stack.pop();
        if (node) {
          if (maxDepth < depth) {
            maxDepth = depth;
            resultNode = node.val;
          }
          if (node.right) {
            stack.push({ node: node.right, depth: depth + 1 });
          }
          if (node.left) {
            stack.push({ node: node.left, depth: depth + 1 });
          }
        }
      }
    }
    DFS(root);
  
    return resultNode;
  };
  