//Implement Queue DS

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //pushing to the end
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
  }
  dequeue() {
    if (!this.last) return null;
    if (this.first === this.last) this.last = null;
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size--;
    return nodeToRemove.value;
  }
}
//Insertion O(1)
//Removal O(1);
//Searching O(n)
//Acsess O(n)
