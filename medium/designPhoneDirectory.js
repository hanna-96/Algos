// Design a Phone Directory which supports the following operations:

// get: Provide a number which is not assigned to anyone.
// check: Check if a number is available or not.
// release: Recycle or release a number.

// Example:

// // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
// PhoneDirectory directory = new PhoneDirectory(3);

// // It can return any available phone number. Here we assume it returns 0.
// directory.get();

// // Assume it returns 1.
// directory.get();

// // The number 2 is available, so return true.
// directory.check(2);

// // It returns 2, the only number that is left.
// directory.get();

// // The number 2 is no longer available, so return false.
// directory.check(2);

// // Release number 2 back to the pool.
// directory.release(2);

// // Number 2 is available again, return true.
// directory.check(2);

//solution 1 , using queue
// maxNumbers - The maximum numbers that can be stored in the phone directory.
//Time O(n), Space O(n)
var PhoneDirectory = function (maxNumbers) {
  this.queue = [];
  for (let i = 0; i < maxNumbers; i++) {
    this.queue.push(i);
  }
};

//  Provide a number which is not assigned to anyone.
//  Return an available number. Return -1 if none is available.
//Time O(1), Space O(1)
PhoneDirectory.prototype.get = function () {
  if (!this.queue.length) return -1;
  return this.queue.shift();
};

//  Check if a number is available or not.
//Time O(n), Space O(1)
PhoneDirectory.prototype.check = function (number) {
  return this.queue.includes(number);
};

//  Recycle or release a number.
//Time O(n), Space O(1)
PhoneDirectory.prototype.release = function (number) {
  if (!this.queue.includes(number)) this.queue.push(number);
};

//solution 2 , using Set
var PhoneDirectory = function (maxNumbers) {
  this.set = new Set();
  for (let i = 0; i < maxNumbers; i++) {
    this.set.add(i);
  }
};
//Time O(1),Space O(1)
PhoneDirectory.prototype.get = function () {
  if (!this.set.size) return -1;
  let valToReturn = this.set.keys().next().value;
  this.set.delete(valToReturn);
  return valToReturn;
};
//Time O(1),Space O(1)
PhoneDirectory.prototype.check = function (number) {
  return this.set.has(number);
};
//Time O(1),Space O(1)
PhoneDirectory.prototype.release = function (number) {
  this.set.add(number);
};
