// Reverse a singly linked list.
// Example:

// Input: 1->2->3->4->5->NULL          2 <- 1
// Output: 5->4->3->2->1->NULL
// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

function reverseList(head) {
  let prev = null; //at the start head's prev is pointing to null
  while (head !== null) {
    //1 2
    //store a reference to next property
    let nextNode = head.next; //2 3
    //1.make next to be a prev so that the current head will POINT to 2 (2 <- 1)
    //2. (     2 <- 3)
    head.next = prev; //  null
    prev = head; //1
    head = nextNode; //2
  }
  return prev;
}
//time O(n);
//space O(1);

//recursive solution
function reverseList(head) {
  if (head === null || head.next === null) return head;
  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
}
//time O(n);
// space O(n)
