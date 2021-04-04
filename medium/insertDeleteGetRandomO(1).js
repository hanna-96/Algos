//Time O(1), Space O(n)

var RandomizedSet = function () {
  this.map = new Map(); // will store an element: value will be its index in the array
  this.keys = []; // used to compute a getRandom method
};

RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.keys.push(val);
    this.map.set(val, this.keys.length - 1);
    return true;
  }
  return false;
};

RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    let idx = this.map.get(val); // 0
    // since we are going to swap this el with the last el in keys arr => we need to reassign the idx of the last el to current idx in map

    this.map.set(this.keys[this.keys.length - 1], idx);

    // change the positions of the element to remove with the last element in array
    // and pop it
    let swap = this.keys[this.keys.length - 1];
    this.keys[this.keys.length - 1] = this.keys[idx];
    this.keys[idx] = swap;
    this.keys.pop();
    this.map.delete(val);
    return true;
  }
  return false;
};
