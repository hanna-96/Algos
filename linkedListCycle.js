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
