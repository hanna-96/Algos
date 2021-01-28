// Given a stream of integers and a window size, calculate the moving average
//of all integers in the sliding window.

// Implement the MovingAverage class:
// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.
// Example 1:

// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

var MovingAverage = function (size) {
  this.size = size;
  this.values = [];
  this.sum = 0;
  this.pointer = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
//solution one (using a queue)
var MovingAverage = function (size) {
  this.size = size;
  this.queue = []; //act like a queue, where we'll store only n(size) amount of values
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
//[1,10,3,5];     //sum=14 -3 +5 =16
//    |

//we need to count the average ONLY of the last n elements in the values array, where n=== window size
MovingAverage.prototype.next = function (val) {
  this.queue.push(val);
  if (this.queue.length > this.size) {
    //once there're more elements in the values array then the given size of the window;
    // we need to substract the 1st one and add a new val(so that we'll cinsider always only the n last elelemnts!!!)
    this.sum -= this.queue.shift(); //substract the 1st val from the sum
  }
  this.sum += val; //add a new val
  //eventually we'll have n values in the queue
  return this.sum / this.queue.length;
};

//solution two (using array)
//Time O(n),where n is the size of the moving window,since we need to retrieve last n elements
//at each invokation of bext(val) function
//Space O(M), where M is the length of the values array,which will grow at each invokation
//of next(val) function
//we need to count the average ONLY of the last n elements in the values array, where n=== window size
MovingAverage.prototype.next = function (val) {
  let average;
  if (this.values.length < this.size) {
    this.sum += val;
  } else {
    //once there're more elements in the values array then the given size of the window;
    // we need to substract the 1st one and add a new val(so that we'll cinsider always only the n last elelemnts!!!)
    this.sum -= this.values[this.pointer]; //substract the 1st val from the sum
    this.sum += val; //add a new val
    this.pointer++; //move on to the next element
  }
  this.values.push(val);
  //eventually we'll have this.values = [1,10,3,5];  but we need the average only of the last n (size) ones
  if (this.values.length > this.size) {
    average = this.sum / this.size;
  } else {
    average = this.sum / this.values.length;
  }
  return average;
};
