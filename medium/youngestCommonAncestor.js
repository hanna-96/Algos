//You're given three inputs, all of which are instances of an AncestralTree class that
//has  an ancestor  property pointing to their youngest ancestor. The first input is the top ancestor in an
//   ancestral tree (i.e., the only instance that has no ancestor--its ancestor
// property points to null), and the other two inputs are descendants in the ancestral
//   tree.

// Write a function that returns the youngest common ancestor to the two
// descendants.

// Note that a descendant is considered its own ancestor. So in the simple
// ancestral tree below, the youngest common ancestor to nodes A and B is node A.
//Input
//topAncestor = node A
//  descandantOne = node E
//  descandantTwo = node I
//      A
//   /     \
//  B       C
// /   \   /   \
// D     E F     G
// / \
// H  I
//Output: node B

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
//Iterate the tree from bottom to the top
//1.find the depths of two descendants
//2.whichever descendant is deeper in the tree => we need to put him at the same level as another descendant
//3.Once the two nodes are at the same level => Let's go upwards until the meet at the same spot
//4.Once they're at the same spot( node1===node2)=>That's the youngest common ancestor(return either of them )
//Time O(d),d-is the depth of the lowest descendant; Space O(1)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // if(descendantOne.ancestor === descendantTwo.ancestor) return descendantOne.ancestor;
  let descendantOneDepth = findDepth(topAncestor, descendantOne);
  let descendantTwoDepth = findDepth(topAncestor, descendantTwo);
  if (descendantOneDepth > descendantTwoDepth) {
    while (descendantOneDepth !== descendantTwoDepth) {
      descendantOne = descendantOne.ancestor;
      descendantOneDepth--;
    }
  } else {
    while (descendantOneDepth !== descendantTwoDepth) {
      descendantTwo = descendantTwo.ancestor;
      descendantTwoDepth--;
    }
  }

  while (descendantOne !== descendantTwo) {
    descendantOne = descendantOne.ancestor;
    descendantTwo = descendantTwo.ancestor;
  }
  return descendantTwo;
}

function findDepth(topAncestor, currentDescendant) {
  let depth = 0;
  while (currentDescendant !== topAncestor) {
    depth++;
    currentDescendant = currentDescendant.ancestor;
  }
  return depth;
}
