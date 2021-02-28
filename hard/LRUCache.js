//Implement LRUCache  class for a Least Recently Used (LRU) cache. The class should support:
//- Inserting key-value pairs with the  insertKeyValuePair method;
// - Retrieving a key's value with the  getValueFromKey method.
//- Retrieving the most recently used (the most recently inserted or retrieved) key with the
// getNostRecentKey method.
//Each of these methods should run in constant time.

//Additionally , LRUCache class should store a maxsize  property set to the size of the cache, which is passed in
//   as an argument during instantiation. This size represents the maximum number
//   of key-value pairs that the cache can store at once. If a key-value pair is
//   inserted in the cache when it has reached maximum capacity, the least recently
//   used key-value pair should be evicted from the cache and no longer
//   retrievable; the newly added key-value pair should effectively replace it.

// Note that inserting a key-value pair with an already existing key should
// simply replace the key's value in the cache with the new value and shouldn't
// evict a key-value pair if the cache is full. Lastly, attempting to retrieve a
// value from a key that isn't in the cache should return null.

//Time O(1), Space O(1)
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.map = new Map();
    this.mostRecentNodes = new DoublyLinkedList();
  }

  insertKeyValuePair(key, val) {
    //check if the key already exists in map
    if (this.map.has(key)) {
      //just reassign the value
      this.map.get(key).value = val; //replace the key's value
    } else {
      if (this.map.size === this.maxSize) {
        //we need to replace the least frequantly used key with a new key/value pair
        //1.getLeastFrequentlyUsedNode() ; grab the value at tail of DLL
        //delete it from tje DDL and map
        //And insert a new Value to the map and to DLL

        let leastRecentNode = this.mostRecentNodes.tail.key;
        this.mostRecentNodes.removeTail(); //remove it from the tail
        this.map.delete(leastRecentNode); //remove it from the map
      }
      this.map.set(key, new Node(key, val)); //insert a new key/value pair
    }
    //!!!!  Update the head by puting current node at the head
    this.mostRecentNodes.setNewHead(this.map.get(key));
  }

  getValueFromKey(key) {
    if (!this.map.has(key)) {
      return null;
    }
    //firstly get the value
    let value = this.map.get(key).value;
    //then make it frequently used => SO put it to the head
    this.mostRecentNodes.setNewHead(this.map.get(key)); //passing a current node as an argument
    return value;
  }

  getMostRecentKey() {
    // return the head of doublylinkedlist
    if (!this.mostRecentNodes.head) return;
    let mostRecentNode = this.mostRecentNodes.head.key;
    return mostRecentNode;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  setNewHead(node) {
    if (this.head === node) return;
    else if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      //if there's currently one node in DLL and we're inserting a new one
      this.tail.prev = node;
      this.head = node;
      this.head.next = this.tail;
    } else {
      // if current Node that we want to mark as frequaently used is a tail (at the end od DLL)
      if (this.tail === node) this.removeTail();
      //REMOVE BINDINGS
      //check if we want to grab a node in the middle of DLL
      if (node.prev !== null) node.prev.next = node.next;
      if (node.next !== null) node.next.prev = node.prev;

      node.prev = null;
      node.next = null;

      //grab current head and current tail
      let currentHead = this.head;
      let currentNode = node;
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }
  removeTail() {
    if (this.tail === null) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
