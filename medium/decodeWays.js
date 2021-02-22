const numDecodings =  (s) => {
  //here we'll store number of ways to decode a string of length S up untill the end of input string
  let ways = new Array(s.length + 1).fill(0); //length+1 because we want to consider ways to decode 0

  ways[0] = 1; //there's 1 way to decode a string of length 0

  if (s[0] === "0") {
    ways[1] = 0;
  } else ways[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    console.log("ways", ways);
    //get the substring of a current char =>CURRENT CHAR
    let currentDigit = +s.slice(i - 1, i);
    let prevDigit = +s.slice(i - 2, i);
    //check if currentDigit has a mapping letter(in between 1-26)
    if (currentDigit >= 1) {
      //if there's a mapping =>add to the current subproblem all the possible ways to decode previous digits
      ways[i] += ways[i - 1];
    }
    //check if the prevDigit AND currentDigit have a mapping letter
    if (prevDigit >= 10 && prevDigit <= 26) {
      ways[i] += ways[i - 2];
    }
  }
  return ways[s.length];
};
