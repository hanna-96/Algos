/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).


Plan:
1.Use a stack to do DFS through the graph
2.Create a hashMap to store an original node val : newly created clone node val
3. Iterate through stack: 
-grab current node and its edges(neighbors);
- iterate through its children and for each chils :
-if we haven't stored that child in the hashMap then store it and assign a new Node copy AND push it to the stack to explore
- once we stored it in a hashMap=>get currentNode's clone node val NEIGHBORS and push current child there
*/
var cloneGraph = function (node) {
    if (!node) return node;
    let hashMap = new Map();
    let stack = [node];
    hashMap.set(node.val, new Node(node.val));
    while (stack.length) {
      let currentNode = stack.pop();
      let edges = currentNode.neighbors;
      for (const edge of edges && edges) {
        if (!hashMap.has(edge.val)) {
          hashMap.set(edge.val, new Node(edge.val));
          stack.push(edge);
        }
        hashMap.get(currentNode.val).neighbors.push(hashMap.get(edge.val));
      }
    }
    return hashMap.get(node.val);
  };
  