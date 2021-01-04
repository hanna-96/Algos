//   Given an array of buildings and a direction that all of the buildings face,
//   return an array of the indices of the buildings that can see the sunset.

//   A building can see the sunset if it's strictly taller than all of the
//   buildings that come after it in the direction that it faces.

//   The input array named buildings  contains positive, non-zero
//   integers representing the heights of the buildings. A building at index i
//   thus has a height denoted by buildings[i].. All of
//   the buildings face the same direction, and this direction is either east or
//   west, denoted by the input string named direction , which will
//   always be equal to either "EAST" or "WEST". In
//   relation to the input array, you can interpret these directions as right for
//   east and left for west.

// Input  = [3, 5, 4, 4, 3, 1, 3, 2],direction = "EAST"
//Output [1, 3, 6, 7]

// Input 2  = [3, 5, 4, 4, 3, 1, 3, 2], direction = "WEST"
//Output: [0, 1]
//Time O(n); Space O(n);
function sunsetViews(buildings, direction) {
  // Write your code here.
  // if(!buildings.length) return [];/
  let res = [];
  let startIdx, step;
  let maxHeight = 0;
  if (direction === "EAST") {
    startIdx = buildings.length - 1;
    step = -1;
  } else if (direction === "WEST") {
    startIdx = 0;
    step = 1;
  }

  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    let curHeight = buildings[idx];
    if (curHeight > maxHeight) {
      res.push(idx);
    }
    maxHeight = Math.max(maxHeight, curHeight);
    idx = idx + step;
  }
  if (direction === "EAST") res.reverse();
  return res;
}
