// Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.
// A group of duplicate files consists of at least two files that have exactly the same content.
// A single directory info string in the input list has the following format:
// "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
// It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.
// The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

// "directory_path/file_name.txt"
// Example 1:

// Input:
// ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
// Output:
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

// Note:
// No order is required for the final output.
// You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
// The number of files given is in the range of [1,20000].
// You may assume no files or directories share the same name in the same directory.
// You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.

//Time O(n * m), where n is number of strings of length m parsed;
// Space O(n * m), map and res size grows up to n*m
const findDuplicate = (paths) => {
    //return the groups of paths that have the same content in their files
    //the paths that have the same contents should be grouped together in an arr
    // And then eventually all groups should be pushed into one final array.
    let res = [];
    let map = new Map();
    for (let path of paths) {
      let splitted = path.split(" ");
      let fileName = "";
      let content = "";
      let start;
      for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].includes(".txt")) {
          let root = `${splitted[0]}/`;
          for (let j = 0; j < splitted[i].length; j++) {
            if (splitted[i][j] === "(") {
              start = j;
            } else if (splitted[i][j] === ")") {
              content = splitted[i].slice(start, j + 1);
              fileName = splitted[i].slice(0, start);
              let valueToStore = `${root}${fileName}`;
              if (!map.has(content)) {
                map.set(content, [valueToStore]);
              } else {
                let values = map.get(content);
                values.push(valueToStore);
              }
            }
          }
        }
      }
    }
    let allValues = map.values();
  
    for (let path of allValues) {
      if (path.length < 2) continue;
      res.push(path);
    }
  
    return res;
  };
  