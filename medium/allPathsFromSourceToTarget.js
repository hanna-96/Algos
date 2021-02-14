// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// The input graph is guaranteed to be a DAG.

var allPathsSourceTarget = function (graph) {
  let results = [];
  results = DFS(0, graph, results);
  console.log("results", results);
  return results;
};

function DFS(node, graph, results, curResults = [0]) {
  if (node === graph.length - 1) {
    results.push(curResults);
    return results;
  }

  for (let i = 0; i < graph[node].length; i++) {
    let edge = graph[node][i];
    let copy = [...curResults];
    copy.push(edge);
    DFS(edge, graph, results, copy);
  }
  return results;
}
