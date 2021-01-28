// Design a logger system that receives a stream of messages along with their timestamps.
// Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t
//will prevent other identical messages from being printed until timestamp t + 10).
// All messages will come in chronological order. Several messages may arrive at the same timestamp.

// Implement the Logger class:

// Logger() Initializes the logger object.
// bool shouldPrintMessage(int timestamp, string message) Returns true if the message
// should be printed in the given timestamp, otherwise returns false.

// Example 1:

// Input
// ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
// [[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
// Output
// [null, true, true, false, false, false, true]

// Explanation
// Logger logger = new Logger();
// logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
// logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
// logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
// logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is
//                                       // 11 + 10 = 21

//solution 1 //Time O(1);Space O(M),where M is the size of all upcoming messages.
/**
 * Initialize your data structure here.
 */
var Logger = function () {
  this.obj = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  //it it's a new message then store it in obj and print it
  if (!this.obj[message]) {
    let newTimestamp = timestamp + 10;
    this.obj[message] = newTimestamp;
    return true;
  } else {
    //if the upcoming message was already printed before
    //check if the previous one has finished printing already
    if (timestamp < this.obj[message]) return false;
    //if not then return false
    else {
      this.obj[message] = timestamp + 10; //if yes, reassign a new timestamp and return true
      return true;
    }
  }
};
