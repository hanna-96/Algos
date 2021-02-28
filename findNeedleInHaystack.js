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

  //another option
  const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
      if (haystack[i] === needle[0]) {                // as soon as we see a character that matches the first character of needle
        for (let j = 0; j < needle.length; j++) {     // start looping through both needle and haystack
          if (needle[j] !== haystack[i + j]) {        // as soon as the characters don't match
            break;                                    // break out of the loop and return to looping through haystack
          } else if (j === needle.length - 1){        // otherwise, if we looped through the entire needle and all of the characters matched
            return i;                                 // return the index of the first character of haystack with which we started the loop
          }
        }
      }
    }
    
    return -1;                                        // return -1 if there wasn't a match
  };
  //solution using 2 pointers
const strStr1 = (h, n) =>{
    if (!n) return 0
    for (let j = 0, i = 0; i < h.length; i++) {
        if (h[i] === n[j]) j++
        else (i -= j, j = 0)
        if (j === n.length) return i - j + 1
    }
    return -1
};
//solution 3
const strStr3 = (haystack, needle) =>{
    if (!needle.length) return 0;
    let p1 = 0;
    while (p1 < haystack.length) {
        let next = p1;
        let p2 = 0;
        while(haystack[next] === needle[p2] && p2 < needle.length){
            next++;
            p2++;
        }
        if(p2 === needle.length) return p1;
        p1++;

    }
    return -1
};