//Given a node class thta has a name and an array of optional childrean nodes.
//When put together ,nodes form an acyclic tree-like structure.
//Implement the Breadth first search method on the Node class(navigating from left to right);
//and store s all of the nodes' names in the input array and returns it.

//Input: = A
//      /  |  \
//      B   C   D
//     / \     / \
//    E   F   G   H
//       / \   \
//      I   J   K
//Output:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  //Time O(v+e), v is a number of vertices, e-number of edges(connections)
  //we traverse every node + its children(1 edge is 1 child)
  //Space O(v); as we are storing vertices in the array
  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [this]; //start with the root node
    while (queue.length) {
      //everytime we'll shift a parent node =>push it to the array=> AND explore its children by pushing
      //them to the queue
      let curNode = queue.shift();
      array.push(curNode.name);
      curNode.children.forEach((child) => queue.push(child));
    }
    return array;
  }
}
