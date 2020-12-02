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
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow != null) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

var reverseList = function (head) {
  let pre = null;
  let next = null;
  while (head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
