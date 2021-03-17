// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

var addTwoNumbers = function (l1, l2) {
    //reverse two linked lists
    //sum them up
    let reversedL1 = reverseLinkedList(l1); //3427
    let reversedL2 = reverseLinkedList(l2); //465
  
    let newList = new ListNode(0, null); //0->null
    let current = newList;
    let carry = 0;
  
    while (reversedL1 || reversedL2 || carry !== 0) {
      let firstNum, secondNum;
      if (reversedL1) {
        firstNum = reversedL1.val; //3
      } else firstNum = null;
      if (reversedL2) {
        secondNum = reversedL2.val; //4
      } else secondNum = null;
  
      let sum = firstNum + secondNum + carry; //7
      let newNum = sum % 10; //7
      let newNode = new ListNode(newNum); //7
      current.next = newNode; // 0-> 7
      current = newNode; //7
      carry = Math.floor(sum / 10); //0
  
      //iterate through reversedL1 and reverswedL2
      if (reversedL1) {
        reversedL1 = reversedL1.next;
      } else reversedL1 = null;
      if (reversedL2) {
        reversedL2 = reversedL2.next;
      } else reversedL2 = null;
    }
    let reversedFinal = reverseLinkedList(newList.next);
    return reversedFinal;
  };
  
  function reverseLinkedList(l) {
    let prev = null;
    let current = l;
  
    while (current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
  }
  