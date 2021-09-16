/*

  Write a function that takes in the head of a Singly Linked List that contains
  a loop (in other words, the list's tail node points to some node in the list
  instead of null.). The function should return
  the node (the actual node--not just its value) from which the loop originates
  in constant space.
Input:  = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 
                              |    |    |
                              9    8    7
 Output:   4 -> 5 -> 6 
           |    |    |
           9    8    7                           

*/
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//BRUTE FORCE Approach
//Time O(N); Space O(N)
function findLoop(head) {
  const set = new Set();
  let current = head;
  while (current.next) {
    if (set.has(current)) return current;
    set.add(current);
    current = current.next;
  }
}
