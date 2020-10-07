class Graph {
  constructor() {
    this.adjacenceList = {};
  }
  addVertex(vertex) {
    if (!this.adjacenceList[vertex]) this.adjacenceList[vertex] = [];
  }
  addEdge(node1, node2) {
    this.adjacenceList[node1].push(node2);
    this.adjacenceList[node2].push(node1);
  }
  removeEdge(node1, node2) {
    if (this.adjacenceList[node1]) {
      this.adjacenceList[node1] = this.adjacenceList[node1].filter(
        (node) => node !== node2
      );
    }
    if (this.adjacenceList[node2]) {
      this.adjacenceList[node2] = this.adjacenceList[node2].filter(
        (node) => node !== node1
      );
    }
  }
  removeVertex(node1) {
    //before we delete a vertex we have to delete all it's edges!
    //because if we delete only the vertex ->then other vertexes will still be connected to that vertex(will have its value in their arrays)
    if (this.adjacenceList[node1]) {
      this.adjacenceList[node1].forEach((e) => removeEdge(e, node1));
      delete this.adjacenceList[node1];
    }
  }
  DfsRecursive(startingNode) {
    let results = [];
    const visitedNodes = {};
    const adjacenceList = this.adjacenceList;
    (function helper(vertex) {
      if (!vertex) return null;
      visitedNodes[vertex] = true;
      results.push(vertex);
      adjacenceList[vertex].forEach((v) => {
        if (!visitedNodes[v]) return helper(v);
      });
    })(startingNode);
    return results;
  }
  DfsIterative(startingNode) {
    let results = [];
    let stack = [startingNode];
    let visited = {};
    while (stack.length) {
      const currentVertex = stack.pop();
      results.push(currentVertex);
      visited[currentVertex] = true;
      this.adjacenceList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return results;
  }
  Bfs(startingNode) {
    let results = [];
    let visited = {};
    let queue = [startingNode];
    while (queue.length) {
      let currentVertex = queue.shift();
      visited[currentVertex] = true;
      results.push(currentVertex);
      this.adjacenceList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return results;
  }
}
let newGraph = new Graph();
console.log("graph before is", newGraph);
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");
newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");
newGraph.addEdge("B", "D");
newGraph.addEdge("C", "E");
newGraph.addEdge("D", "E");
newGraph.addEdge("D", "F");
newGraph.addEdge("E", "F");
console.log("graph after is", newGraph);
console.log("result of DFS", newGraph.DfsRecursive("A"));
console.log("result of DFS iterative", newGraph.DfsIterative("A"));
console.log("result of BFS ", newGraph.Bfs("A"));
