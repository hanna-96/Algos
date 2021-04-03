//Space O(V+E),where V is the number of airports, E the number of flights
/*
        create a hashmap that will store each 
        depature city as a key and its arrival cities 
        as values, sort the arrival cities by lexical order.
        start iterating from JFK get the first city on the 
        arrival list and call function recursively on the first
        city and delete it from val array
    */
var findItinerary = function (tickets) {
  let result = [];
  let set = new Set();
  let map = new Map();
  for (const [from, to] of tickets) {
    if (!map.has(from)) map.set(from, [to]);
    else {
      map.get(from).push(to);
      let sortedRoutes = map.get(from).sort((a, b) => a.localeCompare(b));
      map.set(from, sortedRoutes);
    }
  }

  helper("JFK", map, result);
  return result.reverse();
};
function helper(initialCity, map, result) {
  let directions = map.get(initialCity);
  while (directions && directions.length) {
    const destination = directions.shift();
    helper(destination, map, result);
  }
  result.push(initialCity);
}
