//write a function that takes in a BST and a target integer value and retruns the closest value to the target value contained in BST.
//you can assume there will be only one closest value

//solution 1 recursive time O(log(N));space  O(log(N))
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helperFunc(tree, target, Infinity);
}
const helperFunc = (tree, target, closest) => {
  //base case
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  //now we need to figure out what direction to go (right/left)
  if (target < tree.value) {
    return helperFunc(tree.left, target, closest);
  } else if (target > tree.value) {
    return helperFunc(tree.right, target, closest);
  } else {
    return closest;
  }
};

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 
//solution  2 iterative
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helperFunc(tree, target, Infinity);
}
function helperFunc(tree, target, closestNode) {
  let currentNode = tree;
  //closestNode will be set to Infinity from start
  while (currentNode !== null) {
    //is Infinity > (12-10) NOPE -> closestNode will be 10 (as it is closer to target)
    if (Math.abs(target - closestNode) > Math.abs(target - currentNode.value)) {
      closestNode = currentNode.value;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }
  return closestNode;
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
