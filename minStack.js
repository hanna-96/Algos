// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
/**
 * initialize your data structure here.
 3 2
 stack [3]
  min [3,2]
 */

//Time O(1) Space O(n)
var MinStack = function () {
  this.stack = [];
  this.min = []; //will help to keep track of min nums
};

MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.min.push(x);
  } else {
    //everytime when we push a new num we need to find
    // the a new minimum between the already excisting min num and a new num
    //and push that new min to the minstack
    let minimum = Math.min(x, this.min[this.min.length - 1]);
    this.min.push(minimum);
  }
  this.stack.push(x);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
//--------solution 2
//time O(1); space O(n) the same as above
var MinStack = function () {
  this.stack = [];
  this.minNums = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  //we'll push a new num to minstack ONLY if it's lesser or equal to num
  if (!this.stack.length || x <= this.minNums[this.minNums.length - 1])
    this.minNums.push(x);
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  //if a num is not the minimum from the minstack then fine we can easily delete it
  if (
    this.stack[this.stack.length - 1] !== this.minNums[this.minNums.length - 1]
  ) {
    this.stack.pop();
  } else {
    //but if it is the same as min then we pop it from both stacks
    //so that a new min will be the one before it in the minstack
    this.stack.pop();
    this.minNums.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minNums[this.minNums.length - 1];
};
