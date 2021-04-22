//Solution using Doubly LinkedList
class TreeNode {
    constructor(val, prev = null, next = null) {
      this.val = val;
      this.prev = prev;
      this.next = next;
    }
  }
  var BrowserHistory = function (homepage) {
    this.root = new TreeNode(homepage);
    this.current = this.root;
  };
  
  BrowserHistory.prototype.visit = function (url) {
    let node = new TreeNode(url);
    node.prev = this.current;
    this.current.next = node;
    this.current = node;
  };
  
  BrowserHistory.prototype.back = function (steps) {
    while (steps > 0) {
      if (!this.current.prev) return this.current.val;
      this.current = this.current.prev;
      steps--;
    }
    return this.current.val;
  };
  
  BrowserHistory.prototype.forward = function (steps) {
    while (steps > 0) {
      if (!this.current.next) break;
      this.current = this.current.next;
      steps--;
    }
    return this.current.val;
  };
  
  //SOLUTION 2 using object
  var BrowserHistory = function (homepage) {
    this.history = {
      page: homepage,
      back: null,
      next: null,
    };
  };
  
  BrowserHistory.prototype.visit = function (url) {
    this.history.next = {
      page: url,
      back: this.history,
      next: null,
    };
    this.history = this.history.next;
  };
  
  BrowserHistory.prototype.back = function (steps) {
    while (this.history.back && steps > 0) {
      steps--;
      this.history = this.history.back;
    }
    return this.history.page;
  };
  
  BrowserHistory.prototype.forward = function (steps) {
    while (this.history.next && steps > 0) {
      this.history = this.history.next;
      steps--;
    }
    return this.history.page;
  };
  