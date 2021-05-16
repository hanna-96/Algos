/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Plan:
1. Create a capy of each node from original LL and map each node to a newLy created copyNode in. a hashMap;
2.once hashMap is constructed , we can easily get the node.next node from a hashMap and node.random from hashMap and assign those values to a copyNode.next and copyNode.random
*/
var copyRandomList = function (head) {
    const hashMap = new Map();
  
    function makeCopy(node) {
      if (!node) return null;
      //1.RESULT of recursive calls =>get the original node's clone from hashMap
      if (hashMap.has(node)) return hashMap.get(node); // every time of calling makeCopy func will return node from hashMap,once hashMap is populated
  
      //create a clone node first
      const copyNode = new Node(node.val);
      hashMap.set(node, copyNode);
  
      //once we created copy nodes we have to connect next and random pointers
  
      // 2. in order to assign the next pointer to the clone =>get the node.next clone node fom hash map
      copyNode.next = makeCopy(node.next); // returns the clone node for the node requested
      // 3. in order to assign the random pointer to the clone =>get the node.random clone node fom hash map
      copyNode.random = makeCopy(node.random);
  
      return copyNode;
    }
    return makeCopy(head);
  };
  