//   You're given an array of arrays where each subarray holds two integer values
//   and represents an item; the first integer is the item's value, and the second
//   integer is the item's weight. You're also given an integer representing the
//   maximum capacity of a knapsack that you have.

//   Your goal is to fit items in your knapsack without having the sum of their
//   weights exceed the knapsack's capacity, all the while maximizing their
//   combined value. Note that you only have one of each item at your disposal.

//   Write a function that returns the maximized combined value of the items that
//   you should pick as well as an array of the indices of each item picked.

//   If there are multiple combinations of items that maximize the total value in
//   the knapsack, your function can return any of them.
//Input  = [[1, 2], [4, 3], [5, 6], [6, 7]], capacity 10
//Output [10, [1, 3]] , // items [4, 3] and [6, 7]

//Time O(nc), Space O(nc), where n is the number of items and c is the capacity
function knapsackProblem(items, capacity) {
  //items[0] = item value
  //items[1] = item capacity
  //goal is to collect items thta have the maximum value together AND are <=  our capacity

  //columns - represent weights(capacities) of knapsack
  //rows represent items
  //0th row  : What would be the max value we could store in each of these bags(with capacities === col)
  //if we had no items?( !!!BASE CASE)=>all 0s
  //1st row: Can we fit our current item into knapsack of capacity "col index"? (compare the weight of current item with col idx)
  //If yes =>then populate that cell with 1
  //What would be the max value we could store in each of these bags(with capacities === col)
  //if we had the currentItem AND the previous items?? and so on/..

  //Eventually when we get to the last row(item) , we will fill up the max value we can put in our bag
  //with all of our items

  let knapsackValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    let row = new Array(capacity + 1).fill(0);
    knapsackValues.push(row);
  }

  //while looping through 2D array, at each cell ask: Can we fit current item into a current knapsack?
  //If it fits (if(items[i][1] <= j)), thwere are 2 options:Math.max of either:
  //-If we DO NOT add  current item=>look at the max value of the cell above(knapsackValues[i-1][j])
  //-If we DO ADD current item: go to prev row (knapsackValues[i-1][j - weight)) ,
  //substract the weight of the current item from the posiotion (col Idx) of the cell above
  // Add the value of  current Item (knapsackValues[i-1][j - weight] +val))
  // AND pich the max of those 2 results
  //.   OTHERWISE knapsackValues[i][j] = knapsackValues[i-1][j]

  //NOTE , the row above current item shows us the max value without adding a current item
  //Once you built knapsackValues , start backtracking
  //1.Compare if the value of the last row last col cell is === to the onc=e above it
  //If yes =>start backtracking
  //If no=> means

  for (let i = 1; i < items.length + 1; i++) {
    let currentValue = items[i - 1][0];
    let currentWeight = items[i - 1][1];
    for (let j = 0; j < capacity + 1; j++) {
      if (currentWeight <= j) {
        //find the max of NOT adding the item OR Adding cur item to the max value of prev row at a capacity which is [j-curWeight]
        knapsackValues[i][j] = Math.max(
          knapsackValues[i - 1][j],
          knapsackValues[i - 1][j - currentWeight] + currentValue
        );
      } else {
        knapsackValues[i][j] = knapsackValues[i - 1][j]; //the max value that we get without current item
      }
    }
  }
  console.log("knapsacks", knapsackValues);
  const results = getKnapsackItems(knapsackValues, items);
  console.log("res", results);

  return [knapsackValues[items.length][capacity], results];
}
function getKnapsackItems(knapsackValues, items) {
  let res = [];
  let i = knapsackValues.length - 1;
  let j = knapsackValues[0].length - 1;

  while (i > 0) {
    //we didn't add the item at current row to the bag, so move on and look for others
    if (knapsackValues[i][j] === knapsackValues[i - 1][j]) {
      i--;
    } else {
      res.unshift(i - 1);
      j -= items[i - 1][1]; //remove the weight of the item we are adding from out current j
      i--;
    }
    if (j === 0) break;
  }
  return res;
}
