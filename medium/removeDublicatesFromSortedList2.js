// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.
// Return the linked list sorted as well.
// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]

//Time O(N), because we go through the list once
// Space O(1) because we don't allocate any additional data structure
var deleteDuplicates = function (head) {
  //create dummy head
  let dummyHead = new ListNode(0, head);
  let prevNode = dummyHead; // the last node before the sublist of duplicates

  while (head !== null) {
    // if it's a beginning of duplicates sublist
    // skip all duplicates
    if (head.next && head.val === head.next.val) {
      // move till the end of duplicates sublist
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      // skip all duplicates
      prevNode.next = head.next;
    } else {
      // otherwise, move prevNode
      prevNode = prevNode.next;
    }
    // move forward
    head = head.next;
  }
  return dummyHead.next;
};
