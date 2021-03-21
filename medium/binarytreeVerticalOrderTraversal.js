// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Example 1:
//     3
//     / \
//    9   20
//        / \
//        15  7

// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]

//optimal approach
//Time O(n),Space O(n)
var verticalOrder = function (root) {
  let output = [];
  let queue = [[root, 0]];
  let map = new Map();
  let min = 0;
  let max = 0;

  if (!root) return output;

  while (queue.length) {
    let [currentNode, col] = queue.shift();
    if (currentNode !== null) {
      if (!map.has(col)) map.set(col, [currentNode.val]);
      else {
        let nodes = map.get(col);
        nodes.push(currentNode.val);
      }
      if (currentNode.left) {
        min = Math.min(min, col - 1);
        queue.push([currentNode.left, col - 1]);
      }
      if (currentNode.right) {
        max = Math.max(max, col + 1);
        queue.push([currentNode.right, col + 1]);
      }
    }
  }
  for (let i = min; i <= max; i++) {
    output.push(map.get(i));
  }

  return output;
};

//approach two with sorting
//Time O(n log n), because of sorting;
//Space O(n), we store n nodes in a hash map and we store all n nodes in output array
var verticalOrder = function (root) {
  let output = [];
  let queue = [[root, 0]];
  let map = new Map();

  if (!root) return output;

  while (queue.length) {
    let [currentNode, col] = queue.shift();
    if (currentNode !== null) {
      if (!map.has(col)) map.set(col, [currentNode.val]);
      else {
        let nodes = map.get(col);
        nodes.push(currentNode.val);
      }
      if (currentNode.left) queue.push([currentNode.left, col - 1]);
      if (currentNode.right) queue.push([currentNode.right, col + 1]);
    }
  }
  let nodesFromMap = [];
  for (let [col, nodes] of map.entries()) {
    nodesFromMap.push([col, nodes]);
  }
  nodesFromMap.sort((a, b) => a[0] - b[0]);
  for (let [col, nodes] of nodesFromMap) {
    output.push(nodes);
  }
  return output;
};
