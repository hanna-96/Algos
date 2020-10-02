// A company is planning to interview 2n people. Given the array costs where
//costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti,
//and the cost of flying the ith person to city b is bCosti.
// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.
// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
var twoCitySchedCost = function (costs) {
  // we have 2 cities: CityA and CityB
  //sort the input array in descending order
  costs.sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
  });
  // console.log('sorted array',costs);
  //set a cap/limit of people company can send to each city
  //as we don't want to send more people (n) to CityA or CityB then needed
  //2n = costs.length  //because length = is the amount of people in the arr
  // n =costs.length/2
  let limit = costs.length / 2; //because in prompt company will interview 2n people

  //set counters to keep track of how many people fly to CityA and CityB (!!!SHOULD NOT TO EXCEED the LIMIT)
  let peopleToCityA = 0;
  let peopleToCityB = 0;

  //set the variable to track the minimum costs
  let companyCosts = 0;

  for (let i = 0; i < costs.length; i++) {
    let costsA = costs[i][0];
    let costsB = costs[i][1];

    //if cityA is cheaper
    if (costsA <= costsB) {
      //and if we are NOT exceeding the limit
      if (peopleToCityA < limit) {
        companyCosts += costsA;
        peopleToCityA++;
      } else {
        //because we cannot send any more people to cityA  we don't have a choice but send the rest to cityB
        companyCosts += costsB;
        peopleToCityB++;
      }
    } else {
      if (costsB <= costsA) {
        if (peopleToCityB < limit) {
          companyCosts += costsB;
          peopleToCityB++;
        } else {
          companyCosts += costsA;
          peopleToCityA++;
        }
      }
    }
  }

  return companyCosts;
};
