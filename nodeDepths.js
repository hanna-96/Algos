//Write a function that takes in a Binary tree and returns the sum of its node's depths.
function nodeDepths(root) {
    // Write your code here.
      //depth === distance between the current node and the root
      let sum = 0;
      let stack = [{node:root,depth:0}];
      while(stack.length){
          const {node,depth}= stack.pop()
          if(node === null) continue;
          sum+=depth;
          stack.push({node:node.left,depth:depth+1});
          stack.push({node:node.right,depth:depth+1})
      }
      return sum
  }
  