// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []

//aproach 1 ,merging in place
//Time O(k*n);
//Space O(1);
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  //every time compare two LL(starting from first two LL) and merge them into one LL

  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    lists.push(mergeTwoSortedLists(l1, l2));
  }
  return lists[0];
};

//approach 2, using extra space(creating a new LL)
//Time O(k*N), where k is number od linked lists, n is the total number of nodes in each list
//Space O(k)
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  //every time compare two LL(starting from first two LL) and merge them into one LL

  let mergedList = lists[0];

  for (let i = 1; i < lists.length; i++) {
    let currentLL = lists[i];
    mergedList = mergeTwoSortedLists(mergedList, currentLL);
  }
  return mergedList;
};
//1-4-5 && 1-3-4
function mergeTwoSortedLists(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  if (!p1) return p2;
  if (!p2) return p1;

  if (p1.val <= p2.val) {
    p1.next = mergeTwoSortedLists(p1.next, p2);
    return p1;
  } else {
    p2.next = mergeTwoSortedLists(p1, p2.next);
    return p2;
  }
}
