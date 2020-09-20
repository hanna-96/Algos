//Given a Node class that has a name and array of children nodes
//implement a depth-first search pre-order(navigating the tree from root-> left->right)
// stores all t6he names in the input array and returns it
//input
//      A
//      / | \
//      B  C D
//      /\   /\
//     E  F  G H
//       / \  \
//      I  J   K
//Result [a,B,E,F,I,J,C,D,G,K,H]

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  //time O(v+e) v = number of nodes in the tree, e = number of edges(depth)
  //space O(v) , as array length
  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      ////call recursion on each child
      //1.A -> has 3 children (B,C,D)
      //A is pushed to array
      //because we are in the loop we'll start from 1st child B(B.depthFirstSearch(array))
      //B is pushed to array
      //2.B-> has 2 children(E,F)
      //we call recursion on its 1st child(E) E.depthFirstSearch(array)
      //E is pushed to array
      //3.E-> has no children ->we are done with E->move to F
      //F is pushed to array
      //4.F->has 2 children (I,J)
      //we call recursion on its 1st child(I) I.depthFirstSearch(array)
      //and so on... until there are no children of A left
      child.depthFirstSearch(array);
    }
    return array;
  }
}

//OR
// depth first seems trivial in comparison! Simply log the value
// and then call the function on each node
// const depthFirstPreOrder = (startingNode, callback) => {
//     callback(startingNode.value);
//     startingNode.children.forEach(child => {
//       depthFirstPreOrder(child, callback);
//     });
//   };

//   const depthFirstPostOrder = (startingNode, callback) => {
//     startingNode.children.forEach(child => {
//       depthFirstPostOrder(child, callback);
//     });
//     callback(startingNode.value);
//   };
