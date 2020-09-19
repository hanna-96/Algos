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
  //option 2 recursive Time O(n)
  function nodeDepths(root,depth = 0) {
    // Write your code here.
      if(root === null) return 0
      return depth + nodeDepths(root.left,depth+1)+nodeDepths(root.right,depth+1)
  }
  //time O(n),where n=total number of nodes in the tree ;not doing anything expensive
  //space O(h), h-> is the height of the tree; the max number of function calls 
  // on the callstack will be the height of the tree
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  