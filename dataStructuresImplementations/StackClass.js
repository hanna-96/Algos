//Implement Stack DS

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
  push(value) {
    let newNode = new Node(value);
    if (!this.fitst) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }
  pop() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null; //if there's only one val in stack
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
//Insertion O(1)
//Removal O(1);
//Searching O(n)
//Acsess O(n)