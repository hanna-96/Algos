//Time O(n),Space O(n)
var levelOrder = function (root) {
    //explore level by level:  root => left =>right
    if (!root) return [];
  
    const allLevels = [];
    let queue = [root];
  
    while (queue.length) {
      let lengthOfCurrentLevel = queue.length;
      const currentLevel = []; // will store all nodes that are at the same level
  
      //explore the level
      for (let i = 0; i < lengthOfCurrentLevel; i++) {
        const currentNode = queue.shift(); // 3, 9
        if (currentNode.left) queue.push(currentNode.left); // push left child to examine for next level
        if (currentNode.right) queue.push(currentNode.right); // push right child to examine for next level
  
        currentLevel.push(currentNode.val); //push node that is at current level
      }
  
      //once we explored all nodes at current level => save result
      allLevels.push(currentLevel);
    }
    return allLevels;
  };
  