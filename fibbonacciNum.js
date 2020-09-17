// Create a function that takes a number n and returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers
//in which each number is the sum of the two numbers preceding it.

function fibonacci(n) {
  if (n === 1 || n === 0) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
//Time complexity O (2^n) two to the power of n;each recursive call makes TWO additional calls that split into two subtrees
//Space O(n) //it's the height of the call stack fib(n-1) completes before fib(n-2)
//we need lot of space in callstack(because of recursive calls)

//recursive solution is not really good as there is too much repetetive work happening
//   fibonacci(10)    // => 8
//option 2
//memoization (we store calculations we've done already in obj so no need to do them again
//instead just look them up in the obj which is O(1) look up)
//time O(n)
//space O(n)
function fibonacci2(n, memo = {}) {
  if (n === 1 || n === 0) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo);
    // console.log("memo is", memo);
  }
  return memo[n];
}
// console.log("result from fib2", fibonacci2(6, (memo = {})));

//time O(n);space O(1)
function fibonacci3(n) {
    let lastTwo = [0,1];
    let counter = 3;
    while(counter <=n){
        let nextFib = lastTwo[0]+lastTwo[1];
        lastTwo[0] = lastTwo[1] //swapping the numbers
        lastTwo[1] = nextFib;
        counter+=1;
    }
    if(n>1) return lastTwo[1];
    else return lastTwo[0]
  }
//   console.log("result 3 is", fibonacci3(6));
