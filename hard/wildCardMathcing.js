// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:

// Input: s = "adceb", p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

/*
Dynamic Programing
1.Build a 2D grid, where colunc will represent chars from pattern and rown represent chars from string.
2.Base case : grid[0][0] === TRUE, because intially char at 0 column at 0 row will be "".
And "" === "" => so mark it to true. The rest will be set to FALSE initially
3. Start constructin the grid from i=1, j = 1.
4.With each iteration we'll compare char at column(j) with char at row(i).
5.There will be 3 CONDITIONS:
  -1) if char from pattern(j) is a "?" grid[i][j] = grid[i-1][j-1],
  idea behind the seen is that  if we take the substring from pattern up to ?(included) and substring from s up until current coordinates of cell(i,j) and  remove ? and last char from s subst, we'll  look if they are equal(this result is already stored in grid[i-1][j-1] , because we compared it before) => TRUE, otherwise FALSE.
  -2) if char from pattern is "*" => if(grid[i])[j-1] === TRUE || grid[i-1][j]=== TRUE) grid[i][j] = TRUE;
  Because behind the seen we're taking the substring from pattern up until * ,and substring from string up untill current cell position and we compare 2 cases:
  - if we are comparing to the value to the LEFT of current cell: we consider * as a 0 sequence of chars( so basically delete * from pattern substr and compare it with substr from str) If it doesn't match =>we'll see that grid[i][j-1] = FALSE , otherwise TRUE
  - if we're comparing with cell from the TOP(grid[i-1][j]), we're considering * as a part of pattern substr and try to remove last char from string substr and compare if they are ===. We'll see the result  at grid[i-1][j].
  
  -3) if char from pattern(j) is a letter and char from string(i) ARE NOT the same letters =>set that cell to FALSE.


Time O(n*m),Space O(m*n), where m is the length of pattern and n is the length os string
*/
var isMatch = function (s, p) {
  const grid = new Array(s.length + 1)
    .fill(false)
    .map(() => new Array(p.length + 1).fill(false));

  grid[0][0] = true; //edge case for "" === ""

  // initialize first column (string)
  //All 0th positions at each row will be FALSE because none of substrings from string can be mathced with ""
  for (let i = 1; i <= s.length; i++) {
    grid[i][0] = false;
  }

  // initialize first row (pattern)
  //All the cells in the 0th row will be set to false (because "" can't match any other char  EXCEPT * , because * can match 0 char or anything )  //So if p[j-1] == "*" and value in prev col === true=>set that cell to true;
  for (let j = 1; j <= p.length; j++) {
    grid[0][j] = grid[0][j - 1] && p[j - 1] == "*";
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "?" || s[i - 1] === p[j - 1])
        grid[i][j] = grid[i - 1][j - 1];
      else if (p[j - 1] === "*") {
        if (grid[i][j - 1] || grid[i - 1][j]) grid[i][j] = true;
      }
    }
  }
  return grid[s.length][p.length];
};
