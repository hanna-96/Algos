//solution using set
//TimeO(n), Space O(n)
const hasCycle = (head) => {
  let set = new Set();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
};
//solution modyfing input list
const hasCycle = (head) => {
  while (head) {
    if (head.val === "#") return true;
    head.val = "#";
    head = head.next;
  }
  return false;
};
//Optimal solution using fast and slow pointers
//Time O(n),Space O(1)
const hasCycle = (head) => {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
