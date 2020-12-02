// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

//Time O(n);
//space O(n)
var isPalindrome = function (head) {
  //iterate through linked list and push every node to array
  let newArr = [];
  while (head) {
    newArr.push(head.val);
    head = head.next;
  }
  //using two pointers to check for palindrome
  let left = 0;
  let right = newArr.length - 1;
  while (left < right) {
    if (newArr[left] !== newArr[right]) return false;
    left++;
    right--;
  }
  return true;
};

//optimal solution  with O(1) space
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  // By representing the runners as pointers, and moving them down the list at the corresponding speeds, we can use this trick to find the middle of the list, and then split the list into two halves.
  //1.split the list into 2 halves;
  //2.reverse the 2nd part
  //3.compare 2nd pard with the 1st
  let slow = head;
  let fast = head;

  // By the time the fast runner gets to the end of the list, the slow runner will be half way.
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //moving fast pointer back to the head
  fast = head;
  slow = reverseList(slow); //reversing the remaining second half
  //where slow is the head of the second half

  //slower half will be shorter
  while (slow != null) {
    if (slow.val != fast.val) return false;
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};

var reverseList = function (head) {
  let prev = null;
  while (head != null) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};
