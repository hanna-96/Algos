// Write a program to find the node at which the intersection of two singly linked lists begins.
// For example, the following two linked lists:
// A:  a1->a2->
//               c1->c2->c3
//B: b1->b2->b3->
//Result   c1
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getIntersectionNode = function (headA, headB) {
  //
  let pointer1 = headA; //helps to keep track of nodes in list A while traversing listA
  let pointer2 = headB; //helps to keep track of nodes in list B while traversing listB
  if (!headA || !headB) return null;
  //we'll traverse untill we're finished with one of the lists
  while (pointer1 !== pointer2) {
    //  at the first time we loop if we hit the end of list A
    //so that they traverse the same amount of nodes
    //so after first loop is done =>two list will catch up  and be at the same node
    if (pointer1 === null) {
      pointer1 = headB; //set it to the head of list B (longer list)
    } else {
      //we're still not at the end of list A =>so move on to next node in listA
      pointer1 = pointer1.next;
    }
    if (pointer2 === null) {
      pointer2 = headA; //set it to the head of list A (longer list)
    } else {
      //we're still not at the end of list A =>so move on to next node in listA
      pointer2 = pointer2.next;
    }
    //once they done traversing return the node they intersected with
    return pointer1;
  }
};
