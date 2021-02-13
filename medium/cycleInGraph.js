// //Input  = [
//   [1, 3],
//   [2, 3, 4],
//   [0],
//   [],
//   [2, 5],
//   [],
// ]
//Output: true; There're several cycles
// 1) 0 -> 1 -> 2 -> 0
// 2) 0 -> 1 -> 4 -> 2 -> 0
// 3) 1 -> 2 -> 0 -> 1

//Time O(v + e), where v-number of vertices, e- number of edges.We consider ALL vertices and edges
//while traversing the graph(DFS)
//Space O(v), we use extra space of the size of the graph
function cycleInGraph(edges) {
  //keep track of visited nodes and which nodes
  //keep track of  nodes athat are currently processing in stack
  //The 1st node is also the last node in the cycle
  //So if you start at the vertex and then traverse the graph and come back to the starting vertex
  //that is still processing (in recursive call)=> that's a cycle

  //Tree edge - is an edge that means we discoverd the node the tree edge is pointing to
  //Back edge - is an edge that points to the node that was already visited before
  let visited = new Array(edges.length).fill(false);
  let nodeIsCurrentlyInStack = new Array(edges.length).fill(false); //helps to keep track of the vertex that is still processing in a recursive call
  for (let i = 0; i < edges.length; i++) {
    let node = i; //0
    if(visited[node]) continue;
    const hasCycle = traverseGraph(
      node,
      edges,
      visited,
      nodeIsCurrentlyInStack
    );
    if (hasCycle) return true;
  }
  return false;
}

function traverseGraph(startNode, edges, visited, nodeIsCurrentlyInStack) {
  visited[startNode] = true;
  nodeIsCurrentlyInStack[startNode] = true; //let's say we're processing 0 vertex
  //if we ever come back to this vertex again WHILE it's still in process=>that's a CYCLE
  //Node will be in stack processing UNTIL we check all of its edges
  const nodesEdges = edges[startNode];
  for (let node of nodesEdges) {
    //while processing any edges of the vertex if we come to one that was visited before=>
    //check if that visited node is still in stack processing
    if (!visited[node]) {
      const hasCycle = traverseGraph(
        node,
        edges,
        visited,
        nodeIsCurrentlyInStack
      );
      if (hasCycle) return true;
    } else if (nodeIsCurrentlyInStack[node]) return true;
    //if we are still processing the ancestor(parent) node =>CYCLE
  }
  //move the node from the call stack after we processed all its edges ANd haven't found the cycle yet
  nodeIsCurrentlyInStack[startNode] = false;
  return false;
}
