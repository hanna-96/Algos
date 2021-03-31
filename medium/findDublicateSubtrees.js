var findDuplicateSubtrees = function (root) {
  let dublicates = [];
  let map = new Map();
  exploreTree(root, map, dublicates);
  return dublicates;
};

function exploreTree(root, map, dublicates) {
  if (!root) return "#";
  //Apply DFS
  //once we reach a leaf node => store the root value + left child.value + right child value as a string in the map
  let keyToStore = `${root.val}!${exploreTree(
    root.left,
    map,
    dublicates
  )}!${exploreTree(root.right, map, dublicates)}`;
  map.set(keyToStore, (map.get(keyToStore) || 0) + 1);
  if (map.get(keyToStore) === 2) dublicates.push(root);

  return keyToStore;
}
