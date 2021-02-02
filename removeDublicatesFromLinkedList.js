//   You're given the head of a Singly Linked List whose nodes are in sorted order
//   with respect to their values. Write a function that returns a modified version
//   of the Linked List that doesn't contain any nodes with duplicate values. The
//   Linked List should be modified in place (i.e., you shouldn't create a brand
//   new list), and the modified Linked List should still have its nodes sorted
//   with respect to their values.

//Input  = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
//Output 1 -> 3 ->; 4 -> 5 -> 6

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  //create a prev variable that will point to head
  //create current that will point to next node in the list
  //traverse the list and when prev.val === current.val =>move the current to current.next until prev !== current
  //if it !== then move prev to current

  let current = linkedList;
  let next = current.next;
  while (current) {
    while (next && current.value === next.value) {
      next = next.next; //move next only when current === next
    }
    if (next === null) {
      //if reached the end =>there's no reason to move on
      current.next = null;
      current = null;
      break;
    }
    current.next = next;
    current = next;
    next = next.next;
  }
  return linkedList;
}
