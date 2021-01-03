// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode(-1);

  //initialize head so that while changing newList HEAD will remember the initial reference to the whole newList
  let head = newList;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      newList.next = l1; //whatever is left in l1 is now a newList
      l1 = l1.next; //shift the reference to next node
    } else {
      //but if there's a smaller node in l2 SAVE whatever was before but after that point to l2
      newList.next = l2;
      l2 = l2.next;
    }

    newList = newList.next; //change the reference to whatever its next node is
  }
  //at the end whatever is left in one of the lists =>attach it to the newList
  if (!l1) {
    newList.next = l2;
  } else {
    newList.next = l1;
  }
  // Although after we modifies newList inside the loop so that eventually if became [4,4]; BUT head saved the whole reference to newList
  return head.next;
};
//solution 2 (recursive)
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
