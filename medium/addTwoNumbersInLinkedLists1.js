// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]


// Time O(max(m,n)); Space O(max(m,n)) , where m- is the length of ll1 and n is the length of ll2
const addTwoNumbers = (l1, l2) => {
    let newList = new ListNode(null); //create dummy LL that will point to the head of result LL
    let firstNode = l1;
    let secondNode = l2;
    let current = newList; //keeps track of the last node we created in the final LL
    let carry = 0;
  
    while (firstNode || secondNode || carry !== 0) {
      let firstNum, secondNum;
      firstNum = firstNode ? firstNode.val : 0;
      secondNum = secondNode ? secondNode.val : 0;
  
      let sum = firstNum + secondNum + carry;
      //kak v stolbik reshaem, sum budet summa dvuh chisel kotorije mi skladivaem
      //a to chislo chto mi perenosim na drugoe budet => carry
      let newNum = sum % 10;
      let newNode = new ListNode(newNum);
      current.next = newNode;
      current = newNode;
      carry = Math.floor(sum / 10);
  
      firstNode = firstNode ? firstNode.next : 0;
      secondNode = secondNode ? secondNode.next : 0;
    }
    return newList.next;
  };
  