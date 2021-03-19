//Time O(n),since we visit every node;
//Space O(n), size of the queue
var connect = function (root) {
    if (!root) return root;
  
    let queue = [root];
    //traverse tree level by level, push each child to the queue
  
    while (queue.length) {
      let size = queue.length;
      //iterate through all nodes at current level
      for (let i = 0; i < size; i++) {
        let currentNode = queue.shift();
        // If it's the last node in that level, then assign next to null
        if (i === size - 1) currentNode.next = null;
        else currentNode.next = queue[0];
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
    return root;
  };
  