// Create a function that takes a number n and returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers 
//in which each number is the sum of the two numbers preceding it.

function fibonacci(n){
    if(n === 1 || n=== 0){
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  //Time complexity O (2^n);making two recursive calls that split into two subtrees
  //Space O(n) //it's the height of the call stack fib(n-1) completes before fib(n-2)
  
  //recursive solution is not really good as there is too much repetetive work happening
//   fibonacci(10)    // => 8
//option 2
  //memoization (we store calculations we've done already in obj so no need to do them again
  //instead just look them up in the obj which is O(1) look up)
  //time O(n)
  //space O(n)
  function fibonacci2(n,memo={}){
    if(n === 1 || n=== 0){
      return n;
    } else if(memo[n]) {
        return memo[n];
    }
        else{
            memo[n] = fibonacci2(n-1,memo)+fibonacci2(n-2,memo);
            console.log('memo is',memo)
    }
    return memo[n]
  }
 console.log('result',fibonacci2(4,memo ={})) 