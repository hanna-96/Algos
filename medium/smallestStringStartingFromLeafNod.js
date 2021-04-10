var smallestFromLeaf = function (root) {
    const alphabhets = "abcdefghijklmnopqrstuvwxyz";
    let prevLongest;
  
    function findShortestPath(root, prevStr) {
      if (!root) return;
      const str = `${alphabhets[root.val]}${prevStr}`;
      if (!root.left && !root.right) {
        prevLongest = !prevLongest || prevLongest > str ? str : prevLongest;
      }
      if (root.left) findShortestPath(root.left, str);
      if (root.right) findShortestPath(root.right, str);
    }
    findShortestPath(root, "");
    return prevLongest || "";
  };
  