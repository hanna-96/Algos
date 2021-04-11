//Time O(n), Space O(1)

var rotateRight = function (head, k) {
    // set p1 point to the beginning of input list
    //set p2 to point to the end
    if (!head) return head;
  
    let oldTail = head;
    let numberOfNodes = 1;
    while (oldTail.next) {
      oldTail = oldTail.next;
      numberOfNodes++;
    }
    // oldTail = 5
    oldTail.next = head; // 5 - 1
    let newTailIdx = numberOfNodes - (k % numberOfNodes);
    let newTail = head;
    let i = 1;
    // place newTail at the newTailIdx
    while (i < newTailIdx) {
      i++;
      newTail = newTail.next;
    }
    // NewTail = 3
    // oldTail.next = head;
    head = newTail.next; // 4 - 5 -  ??? where are we taking the rest from???
    newTail.next = null;
    return head;
  };
  