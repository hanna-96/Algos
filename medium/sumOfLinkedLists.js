//   You're given two Linked Lists of potentially unequal length. Each Linked List
//   represents a non-negative integer, where each node in the Linked List is a
//   digit of that integer, and the first node in each Linked List always
//   represents the least significant digit of the integer. Write a function that
//   returns the head of a new Linked List that represents the sum of the integers
//   represented by the two input Linked Lists.

// //
//   Note: your function must create and return a new Linked List, and you're not
//   allowed to modify either of the input Linked Lists.

//Input: linkedListOne  = 2 -> 4 -> 7 -> 1
//   linkedListTwo =  = 9 -> 4 -> 5
//Output: 1 -> 9 -> 2 -> 2
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let firstNumber = countSumOfNodes(linkedListOne, []);
  let secondNumber = countSumOfNodes(linkedListTwo, []);

  let sum = firstNumber + secondNumber; //2291

  sum = sum.toString().split("").reverse().join("");

  let newList = new LinkedList(+sum[0]);
  let currentHead = newList;
  for (let i = 1; i < sum.length; i++) {
    currentHead.next = new LinkedList(+sum[i]);
    currentHead = currentHead.next;
  }
  return newList;
}
function countSumOfNodes(currentLinkedList, currentSum) {
  while (currentLinkedList) {
    currentSum.push(currentLinkedList.value);
    currentLinkedList = currentLinkedList.next;
  }
  currentSum = +currentSum.reverse().join("");
  return currentSum;
}
//solution 2
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let carry = 0;
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  let newList = new LinkedList(0);
  let current = newList;
  while (nodeOne || nodeTwo || carry !== 0) {
    let firstNum, secondNum;
    if (nodeOne) {
      firstNum = nodeOne.value;
    } else firstNum = null;
    if (nodeTwo) {
      secondNum = nodeTwo.value;
    } else secondNum = null;

    let sum = firstNum + secondNum + carry;

    let newNum = sum % 10;
    let newNode = new LinkedList(newNum); //1
    current.next = newNode;
    current = newNode;
    carry = Math.floor(sum / 10);

    if (nodeOne) {
      nodeOne = nodeOne.next;
    } else nodeOne = null;
    if (nodeTwo) {
      nodeTwo = nodeTwo.next;
    } else nodeTwo = null;
  }
  return newList.next;
}
