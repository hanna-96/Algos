//worh with input as a graph
//need to keep track of all 1's ve seen AND
//keep track of which rivers they are part of!!!

//every element in the matrix is a node(vertix).Each node has a value(either 1 or 0)
//each node has neighbouring nodes(above,below,right,left)
//traverse(BFS,DFS) the graph and at every node check:
//1. if the node has a value of 1 THEN it is part of the river
//2.start applying BFS/DRS on that node(explore its neighbours)
//3.if the first neighbour's value is 1 then AGAIN apply BFS/DFS
//4. repeat it every time to all those neigbouring nodes(that we haven't explored yet)...
// additionaly we need to keep track of the nides we've already visited
// if the node's value is 0 then STOP don't traverse(don't check neighbours)

//TODO
//create a stack/queue to keep tack of neighboors
//craete a variable size of the river
//create a variable visited = false
//create a var results  =[]
//Time O(w*h),where w -is width(length of the row) of the matrix,
//h -is heigth(length of the column)
//OR O(n)
//space O(w*h)

function riverSizes(matrix) {
  // Write your code here.
  let results = [];
  //initialize our additional matrix that will be the same size
  //as our input one but every element in it will be a boolean,
  //will keep track of visited nodes
  let visited = matrix.map((el) => el.map((e) => e === false));
  //loop and visit every row
  for (let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i];
    //now need to iterate through columns to get to nodes
    for (let j = 0; j < subArr.length; j++) {
      if (visited[i][j] === true) continue;
      //if node is not visited  we'll call a helper function on that node
      else traverseNode(i, j, matrix, visited, results);
    }
  }
  return results;
}
function traverseNode(i, j, matrix, visited, results) {
  let currentRiverSize = 0;
  //define an array(treat like  stack) of nodes(neighbours) to explore
  //where i is the row, j is a column at which node is located

  //Keep track of unvisited nodes that could be part of the same river we are investigating
  let nodesToExplore = [[i, j]];
  //while we still have neighboures to explore
  while (nodesToExplore.length) {
    //works like DFS
    let currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    //check if the current neighbour is visited
    if (visited[i][j]) continue;
    //mark as visited
    visited[i][j] = true;
    //but if its a piece of land then skip it because
    //we do not want to visit neighboring node of 0 because
    //all the nodes next to 0 will not be part of river anyway
    if (matrix[i][j] === 0) continue;
    //else  we're at not visited node and it is a river!!!
    currentRiverSize++;
    //Add unvisited neighbors to the stack
    const unvisitedNeighbours = getUnvisitedNeighbours(i, j, matrix, visited);
    for (let neighbour of unvisitedNeighbours) {
      nodesToExplore.push(neighbour);
    }
  }
  //after done looping and finding rivers =>push the size of the current river to the results arr
  if (currentRiverSize > 0) results.push(currentRiverSize);
}
function getUnvisitedNeighbours(i, j, matrix, visited) {
  const unvisitedNeighbours = [];
  //we're looking at the neighbour above(i-1) 1 row above
  //if = 0 =>there's no neighbour above us
  //???????????????????????????
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbours.push([i - 1, j]);
  //now check if we are not at the bottom row
  //and if we haven't visited the neighbour below us
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbours.push([i + 1, j]);
  //check if we are not at leftmost column
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbours.push([i, j - 1]);
  //check if we are not at rightmost column
  //???why 0????
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbours.push([i, j + 1]);
  return unvisitedNeighbours;
}
