/*You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
Input: head = [1,2,3,4]
Output: [1,4,2,3]

*/
//Time O(n); Space O(1);
var reorderList = function (head) {
    if (!head) return null;
    // split the input list in 2 parts
    let fast = head;
    let slow = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    //moving fast pointer back to the head
    fast = head;
  
    // reverse the 2nd part of input list
    slow = reverseLinkedList(slow);
  
    //merge fast and slow lists
    while (slow.next) {
      let tempNextFast = fast.next;
  
      fast.next = slow;
      fast = tempNextFast;
      let tempSlowNext = slow.next;
      slow.next = fast;
      slow = tempSlowNext;
    }
  };
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
  }
  