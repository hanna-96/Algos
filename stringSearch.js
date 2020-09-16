// String Search
// (ie indexOf)
// Prompt
// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

// Examples
// indexOf('or', 'hello world'); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6

const strSearch = (target, str2) => {
  let str2Arr = str2.split("");
  for (let i = 0; i < str2Arr.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str2Arr[i + j]) {
        break;
      }
      if (j + 1 === target.length) {
        return i;
      }
    }
  }
  return -1;
};
console.log(strSearch('or', 'hello world'));