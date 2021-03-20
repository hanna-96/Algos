// You have n processes forming a rooted tree structure. You are given two integer arrays pid and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.

// Each process has only one parent process but may have multiple children processes. Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).

// When a process is killed, all of its children processes will also be killed.

// Given an integer kill representing the ID of a process you want to kill, return a list of the IDs of the processes that will be killed. You may return the answer in any order.

// Example 1:
//      3
//     /  \
//    1    5
//        /
//       10

// Input: pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5
// Output: [5,10]
// Explanation: The processes colored in red are the processes that should be killed.

//Time O(n),we need to traverse over the ppid arr of size n once.
//Space O(n), map of size n is used;
var killProcess = function (pid, ppid, kill) {
  //iterate through parent arr and store in a hash map : parent:[children];
  //find if kill in hash map => then explore its each child children(helper function) recursively
  //untill there are no more children to explore  let map = new Map();

  let p1 = 0;

  while (p1 < ppid.length) {
    let parent = ppid[p1];
    let child = pid[p1];
    if (!map.has(ppid[p1])) map.set(ppid[p1], [pid[p1]]);
    else map.get(ppid[p1]).push(pid[p1]);
    p1++;
  }

  let toDelete = [];
  function exploreChildren(kill) {
    toDelete.push(kill);
    let children = map.get(kill);
    if (!children) return;
    for (let child of children) {
      exploreChildren(child);
    }
  }
  exploreChildren(kill);

  return toDelete;
};
