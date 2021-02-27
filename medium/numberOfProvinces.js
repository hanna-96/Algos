// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
// Return the total number of provinces.

// Example 1:
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Example 2:
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
//Time O(n^2), the complete matrix of n^2 is traversed
//Space O(n), storing n cities in visited array
const findCircleNum = function (isConnected) {
    //isConnected.length = number of cities
    //i => city
    //Each city is  ALWAYS connected to itself
    //loop through each city(i) and check if it is connected to any other cities(j)
    //mark current city as visited and call DFS on its edges
    //keep count of each visited connected city (1)
    let visited = isConnected.map((city) => (city = false));
    let count = 0;
    for (let i = 0; i < isConnected.length; i++) {
      const currentCity = i;
      if (!visited[currentCity]) {
        count++;
        DFS(currentCity, isConnected, visited);
      }
    }
  
    return count;
  };
  
  function DFS(currentCity, isConnected, visited) {
    visited[currentCity] = true;
    //explore if currentcity is connected to any other cities
    let edges = isConnected[currentCity];
  
    for (let j = 0; j < edges.length; j++) {
      const newCity = j;
      if (isConnected[currentCity][newCity] === 1 && !visited[newCity]) {
        DFS(newCity, isConnected, visited);
      }
    }
  }
  