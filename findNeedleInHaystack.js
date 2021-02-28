// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

//Time O((N−L)L), where N is a length of haystack and L is a length of needle.
// We compute a substring of length L in a loop, which is executed (N - L) times.
//Space O(1)
const strStr = (haystack, needle) => {
    if (needle.length === 0) return 0;
  
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, i + needle.length) === needle) return i;
    }
    return -1;
  };
  