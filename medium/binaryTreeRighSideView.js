/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
           1
          / \
        2    3
      /  
     4   
Output: [1,3,4]

Use BFS(queue) and keep track of children at each level.
Check only if it is a last node or the only one node of the current level =>push it to the result

Time O(N),Space O(d)

*/
var rightSideView = function (root) {
    if (!root) return [];
  
    let queue = [root];
    while (queue.length) {
      let length = queue.length;
      for (let i = 0; i < length; i++) {
        const node = queue.shift();
        //only if this is the last node at a current level=>push it to the queue(it can be either the righmost node or only left node)
        if (i === length - 1) res.push(node.val);
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return res;
  };
  