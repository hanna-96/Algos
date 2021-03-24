// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

//Time O(N*M), N is the number of equations, M number of queries
//SPace O(N), we build graph
var calcEquation = function (equations, values, queries) {
  let graph = {};
  let res = [];

  //build the graph(adjacency list)
  for (let i = 0; i < equations.length; i++) {
    let x = equations[i][0];
    let y = equations[i][1];
    if (!graph[x]) graph[x] = [[y, values[i]]];
    else graph[x].push([y, values[i]]);

    if (!graph[y]) graph[y] = [[x, 1 / values[i]]];
    else graph[y].push([x, 1 / values[i]]);
  }

  for (let i = 0; i < queries.length; i++) {
    let [dividend, divisor] = queries[i];
    let visited = new Set();
    let answer = findConnectedValues(
      graph,
      dividend,
      dividend,
      divisor,
      1,
      visited
    );

    if (!answer) res.push(-1);
    else res.push(answer);
  }
  return res;
};

function findConnectedValues(
  graph,
  startNode,
  currentNode,
  destinationNode,
  product,
  visited
) {
  //destination or source is non existent
  if (!graph[startNode] || !graph[destinationNode]) return -1;
  //startNode is same as destination i.e. self-loop.
  if (startNode === destinationNode) return 1;

  //once we reahced destination
  if (currentNode === destinationNode) return product;

  visited.add(currentNode);
  const edges = graph[currentNode];

  for (let i = 0; i < edges.length; i++) {
    if (visited.has(edges[i][0])) continue;
    else {
      let result = findConnectedValues(
        graph,
        currentNode,
        edges[i][0],
        destinationNode,
        product * edges[i][1],
        visited
      );
      // if any value was found we return because
      // the only other cases would be having a cycle, or reaching our destination or path.
      if (result !== false) return result;
    }
  }
  // We only return false if we've searched all neighbors and there's no path to destination
  // however we know that src and dest are in adjList
  // thus it may just be disconnected, but this may return from different levels of recursion.
  return false;
}
