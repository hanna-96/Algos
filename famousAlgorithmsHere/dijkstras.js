class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(v, priority) {
    this.values.push({ v, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstrasAlgorithms(startVertex, targetVertex) {
    const distances = {}; //we'll track the distance from one vertex to another once we visit it
    const previous = {}; //will track where we came from to the current node we are at
    const queueWithNodes = new PriorityQueue();
    let path = []; //return eventually
    let currentVertex;

    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        queueWithNodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queueWithNodes.enqueue(vertex, Infinity);
      }
      //add each vertex with a priority of Infinity to the Priority queue,exept the startVertex(its priority is 0)
      // priorityQueue.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }
    //while there are still nodes to visit
    while (queueWithNodes.values.length) {
      currentVertex = queueWithNodes.dequeue().v; //a vertex with a lowest priority
      if (currentVertex === targetVertex) {
        //we are DONE ; BUILD PATH how we got here
        while (previous[currentVertex]) {
          path.push(currentVertex); //[E F ...]
          currentVertex = previous[currentVertex];
        }
        break;
      }
      //otherwise loop through each neighbour(if it is NOT visited yet) in the adjacency list at current vertex;
      if (currentVertex || distances[currentVertex] !== Infinity) {
        for (let neighbour in this.adjacencyList[currentVertex]) {
          //find neighboring node
          let nextNeighbor = this.adjacencyList[currentVertex][neighbour];
          //now calculate new distance form currentNode to its neighboring node
          let newDistance = distances[currentVertex] + nextNeighbor.weight; //take the current path distance to the vertex we're currently at
          // and add it to the distance to the next neighbor we're currently considering
          if (newDistance < distances[nextNeighbor.node]) {
            //and if this newDistance is < then another(previously calculated) path distance
            // to the next neighbor we're considering then it means it IS a shorter path
            //EASY WORDS( chech the distance that led us to the current node + the distance to the next neighbor and compare it to another possible
            // previously calculated distance(which was calculated from another node))

            //update it if's a shorter path
            distances[nextNeighbor.node] = newDistance;
            previous[nextNeighbor.node] = currentVertex; //update how we got(from what node) to the next neighbor
            //now enqueue in priority queue with new priority
            queueWithNodes.enqueue(nextNeighbor.node, newDistance);
          }
        }
      }
    }
    return path.concat(currentVertex).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

//   console.log("graph is", graph);
//   console.log("dijkstras is", graph.dijkstrasAlgorithms("A", "E"));
