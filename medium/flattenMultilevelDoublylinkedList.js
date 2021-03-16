//Time O(n), where n is every node in DLL
//Space O(n)
const flatten = (head) => {
    if (head === null) return head;
  
    let pseudoHead = new Node(0, null, head, null);
    let prev = pseudoHead;
    let stack = [head];
  
    while (stack.length) {
      let currentNode = stack.pop();
      prev.next = currentNode;
      currentNode.prev = prev;
  
      if (currentNode.next) stack.push(currentNode.next);
      if (currentNode.child) {
        stack.push(currentNode.child);
        currentNode.child = null; // don't forget to remove all child pointers.
      }
      prev = currentNode;
    }
    pseudoHead.next.prev = null;
    return pseudoHead.next;
  };
  