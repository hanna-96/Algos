//   You're given a non-empty array of positive integers representing the amounts
//   of time that specific queries take to execute. Only one query can be executed
//   at a time, but the queries can be executed in any order.
// A query's is defined as the amount of time that it must
// wait before its execution starts. In other words, if a query is executed
// second, then its waiting time is the duration of the first query; if a query
// is executed third, then its waiting time is the sum of the durations of the
// first two queries.

// Write a function that returns the minimum amount of total waiting time for all
// of the queries. For example, if you're given the queries of durations [1,4,5], then
// ,then the total waiting time if the queries were executed in the order of [5,1,4]
//would be (0) + (5) + (5 + 1) = 11
// .The first query of duration 5  would be executed immediately, so its waiting time would be 0,
// the second query of duration 1  seconds (the duration of the first query) to be executed, and
//   the last query would have to wait the duration of the first two queries before
//   being executed.
// Note: you're allowed to mutate the input array.
//Input:  = [3, 2, 1, 2, 6];
//Output: 17; ( 1 + (1 + 2) + (1 + 2 + 2) + (1 + 2 + 2 + 3))

//optimal solution
//Time O( n log n); Space O(1);
function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b);

  let minWaitTime = 0;
  for (let i = 0; i < queries.length; i++) {
    let duration = queries[i];
    let queriesLeft = queries.length - (i + 1);
    minWaitTime += duration * queriesLeft;
  }
  return minWaitTime;
}

//Time O( n log n); Space O(n)
function minimumWaitingTime(queries) {
  // sort the input so that the longet querie will be always at the end
  queries = queries.sort((a, b) => a - b);
  //create an array and at each index store the total waiting time for each querie
  let res = [0]; //1st querie will never have to wait to execute so its waiting time =0
  let waitTime = 0;
  for (let i = 1; i < queries.length; i++) {
    waitTime += queries[i - 1]; //wait time for cur queie is the sum og all previous queries
    res[i] = waitTime;
  }
  return res.reduce((cur, waitTime) => {
    return waitTime + cur;
  }, 0);
}
