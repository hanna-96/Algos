// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
Find all the parent nodes
/find the target node
do a. BFS and find all the nodes that are distance. k
AS soon as we find a node with a distance === k in the queue=> 
all the nodes that are currently in the queue are all distance === k from the target node(because of BFS)
*/
//Time O(N),Space  O(N)
function findNodesDistanceK(tree, target, k) {
  const parents = findParents(tree, null);
  const targetNode = getTargetNode(target, parents, tree);
  return BFS(targetNode, parents, k);
}
function findParents(tree, parent, parents = {}) {
  if (tree) {
    parents[tree.value] = parent;
    if (tree.left) findParents(tree.left, tree, parents);
    if (tree.right) findParents(tree.right, tree, parents);
  }
  return parents;
}

//once we locate the target node in the pasrents obj:check if it's a left child or right child of parent
function getTargetNode(target, parents, tree) {
  if (tree.value === target) return tree;
  let targetNodeParent = parents[target]; // grab the parent of target node

  //check whether target node is left or right child
  if (targetNodeParent.left && targetNodeParent.left.value === target)
    return targetNodeParent.left;
  return targetNodeParent.right;
}

//After we found target Node , let's do BFS(parent,left,right) in order to find node with distance k
function BFS(targetNode, parents, k) {
  let res = [];
  const queue = [[targetNode, 0]]; //store the current node and its distance from targetNode
  const visited = new Set([targetNode.value]);
  while (queue.length) {
    const [node, distance] = queue.shift();
    if (distance === k) {
      res = queue.map((el) => el[0].value);
      res.push(node.value);
      return res;
    }
    let neighbors = [node.left, node.right, parents[node.value]];
    for (const node of neighbors) {
      if (node === null) continue;
      if (visited.has(node.value)) continue;
      visited.add(node.value);
      queue.push([node, distance + 1]);
    }
  }
  return res;
}
