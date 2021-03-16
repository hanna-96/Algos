function UndergroundSystem() {
  this.arrivals = new Map(); //{id:{id,station,time}}
  this.average = new Map(); // {"startStation-destinationStation":{total,countOfPeople}}
  //average = total/countOfPeople
}

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  //add customer to our arrivals map
  if (!this.arrivals.has(id))
    this.arrivals.set(id, { id: id, station: stationName, checkedInTime: t });
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  //before checking out => look up in arrivals map and find the person with id
  //check what was his check in station
  //delete that customer from arrrivals map
  //find travellingTime = difference between check out time - check in time
  // update the average travel time in average map:
  //  - if there is no startStation-endStation => store it in avarege map and assign a value of totalTravel time and numberOf customers who travelled that route
  //.  - if it is there => calculate and update the total travel time and add a new customer to the count

  if (!this.arrivals.has(id)) return "User didnt check in";

  let info = this.arrivals.get(id);
  let checkInTime = info.checkedInTime;
  let checkedOutTime = t;
  let timeInTrain = checkedOutTime - checkInTime;
  this.arrivals.delete(id);

  //update  info in averages map
  let route = `${info.station}-${stationName}`;
  if (!this.average.has(route))
    this.average.set(route, { total: timeInTrain, customersCount: 1 });
  else {
    let valuesFromAverage = this.average.get(route);
    valuesFromAverage.total += timeInTrain;
    valuesFromAverage.customersCount++;
  }
};

UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  //construct a string of startCity and endCity
  //look up in average map
  //calculate average = total/count
  let route = `${startStation}-${endStation}`;
  let value = this.average.get(route);
  let averageTime = value.total / value.customersCount;

  return averageTime;
};
