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
