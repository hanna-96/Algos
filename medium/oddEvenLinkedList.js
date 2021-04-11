// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]


//Time O(n); Space O(1);
var oddEvenList = function (head) {
    if (!head) return null;
    let p1 = head; // will always point to odd nodes
    let p2 = head.next; //will always point to even nodes
    let evenHead = p2; // save reference to beginning of p2.
  
    while (p2 && p2.next) {
      p1.next = p2.next;
      p1 = p1.next; // 1 -3 - 5
      p2.next = p1.next;
      p2 = p2.next; // 2- 4 - null
    }
    p1.next = evenHead; // link the evenList to the tail of the oddList. 1-3-5-2-4-null
    return head;
  };
  