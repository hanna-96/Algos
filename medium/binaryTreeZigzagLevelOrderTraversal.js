//Time O(n),Space O(n)
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let goingLeft = true;

  while (queue.length) {
    let levelResults = [];
    let children = [];
    //this inner queue will collect all children at current level
    while (queue.length) {
      const currentNode = queue.shift();
      levelResults.push(currentNode.val);
      if (goingLeft) {
        if (currentNode.left) children.push(currentNode.left);
        if (currentNode.right) children.push(currentNode.right);
      } else {
        if (currentNode.right) children.push(currentNode.right);
        if (currentNode.left) children.push(currentNode.left);
      }
    }
    // console.log('children',children); //9 20
    queue = children.reverse(); // 20 9
    // console.log('queue after',queue)
    result.push(levelResults);
    goingLeft = !goingLeft;
  }
  return result;
};
