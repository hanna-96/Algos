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
  let map = new Map();
  for (const [from, to] of tickets) {
    if (!map.has(from)) map.set(from, [to]);
    else {
      map.get(from).push(to);
      map.get(from).sort();
    }
  }

  helper("JFK", map, result);
  return result.reverse(); //reverse because of the callstack
};
function helper(initialCity, map, result) {
  let directions = map.get(initialCity);
  //every time we examine one of the directions =>shift it=>because when we come back to the same airport it shoudn't call helper on the direction we already examined
  while (directions && directions.length) {
    const destination = directions.shift(); //ATL, JFK,
    helper(destination, map, result);
  }
  //once we reached the end of the itinerary (no more destinatons) => start pushing cities
  result.push(initialCity); // ["SFO","ATL","SFO","JFK","ATL","JFK"]
}
