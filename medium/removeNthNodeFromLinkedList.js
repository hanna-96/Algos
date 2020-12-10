// Write a function that takes in the head of a Singly Linked List and an integer k
// and removes the kth node from the end of the list.

// The removal should be done in place, meaning that the original data structure
// should be mutated (no new structure should be created).

// Furthermore, the input head of the linked list should remain the head of the
// linked list after the removal is done, even if the head is the node that's
// supposed to be removed. In other words, if the head is the node that's
// supposed to be removed, your function should simply mutate its value and next pointer.
// Note that your function doesn't need to return anything.

// You can assume that the input Linked List will always have at least two nodes
// and, more specifically, at least k nodes.
//Input :  = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 , k=4
//Output = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
//  This is an input class.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Time O(N),where n is number of nodes in the list
function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let first = head;
  let second = head;
  let steps = 1;
  //move second pointer to the kth node from beginning
  while (steps <= k) {
    second = second.next;
    steps++;
  }
  //if second pointer poins to null =>
  // it means that first pointer points to the node we want to remove(head)
  // SO if the node we want to remove is head =>just remove the head node and assign a new head
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  //now start moving both pointers at the same time Until second.next === null
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  // 	once we stopped looping our first pointer points to the kth node we need to remove
  //so we just reassign the pointer to point to the next one
  first.next = first.next.next;
}
