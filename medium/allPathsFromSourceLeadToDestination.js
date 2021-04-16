/*
Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is an edge between nodes ai and bi, and two nodes source and destination of this graph, determine whether or not all paths starting from source eventually, end at destination, that is:

At least one path exists from the source node to the destination node
If a path exists from the source node to a node with no outgoing edges, then that node is equal to destination.
The number of possible paths from source to destination is a finite number.
Return true if and only if all roads from source lead to destination.
Ex 1;
Input: n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
Output: false
Explanation: It is possible to reach and get stuck on both node 1 and node 2.

Example 2:
Input: n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
Output: false
Explanation: We have two possibilities: to end at node 3, or to loop over node 1 and node 2 indefinitely.

Example 3:
Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
Output: true
1.Loop through edges and store each node as a key and all the paths from it as a value.
2. Create a visited set to keep track of visited nodes=> will help to find a cycle
3.If there is a cycle =>return false
4.Otherwise, starting from sourse node do recursive DFS on each nodes connections
5.If we see a node that is not stored in a hash map => it must be a leaf node =>
So check if that leaf node === destination.If so then return true for that recursive call
But if at any point of recusive calls at least one leaf node does not result in destination => return false;
Time O(V+E), SPace O(V+E)
*/
var leadsToDestination = function (n, edges, source, destination) {
    // {
    //     0:[1,2], // THERE IS EDGE BETWEEN 0 AND 1, 0 AND 2
    // }
    const map = new Map();
    for (let [start, end] of edges) {
      if (!map.has(start)) map.set(start, [end]);
      else {
        let connections = map.get(start);
        connections.push(end);
      }
    }
  
    const visited = new Set();
    function DFS(node) {
      if (visited.has(node)) return false; // there's a cycle in graph
      if (!map.has(node)) return node === destination;
      visited.add(node);
      let allEdges = map.get(node);
      for (let i = 0; i < allEdges.length; i++) {
        if (visited.has(allEdges[i]) || !DFS(allEdges[i])) return false;
      }
      // if we come all the way to this line , it means we finished checking allEdges of a node and never hit false condition => so delete it from visited for other next checks
      visited.delete(node);
      return true;
    }
    return DFS(source);
  };
  