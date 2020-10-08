// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.
// It is guaranteed that the answer is unique.
// Example 1:
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

//time O(n);
//space O(n);
var removeDuplicates = function(s, k) {
    // Input: s = "deeedbbcccbdaa", k = 3
    // Output: "aa"
    //             0    1       0       1
    //stack --> [[charD,count],[charE,count]
    
    let stack =[];
    
    for(let i=0;i<s.length;i++){
      console.log('stack1', stack)
      if(!stack.length || stack[stack.length-1][0] !== s[i]){
        stack.push([s[i],1])
      }else{
        stack[stack.length-1][1]++;
        if(stack[stack.length-1][1] === k) stack.pop();
    }
    }
     console.log('stack after', stack);
     let finalString = '';
     for(let [letter,count] of stack){
       finalString+= letter.repeat(count)
     }
     return finalString;
    };
    removeDuplicates("deeedbbcccbdaa", k = 3)