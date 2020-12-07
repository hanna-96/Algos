//   Write a function that takes in a non-empty array of integers and returns an
//   array of the same length, where each element in the output array is equal to
//   the product of every other number in the input array.

//   In other words, the value at output[i] is equal to the product of every number
//   in the input array other then input[i].
//   Note that you're expected to solve this problem without using division.
//Input: [5,1,4,2];
//Output:[8,40,10,20]

//brute force solution
//time O(n^2); space O(n)
function arrayOfProducts(array) {
  // Write your code here.
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) product *= array[j];
    }
    res[i] = product;
  }
  return res;
}

//optimal solution
//time O(n); space O(n)
function arrayOfProducts(array) {
  // Write your code here.
  let res = new Array(array.length).fill(1);
  let leftProducts = 1;
  let rightProducts = 1;

  let leftProductsArr = new Array(array.length).fill(1);
  let rightProductsArr = new Array(array.length).fill(1);

  //calculate products to the left of each element
  for (let i = 0; i < array.length; i++) {
    leftProductsArr[i] = leftProducts;
    leftProducts *= array[i];
  }
  //calculate products to the rigth of each element
  for (let i = array.length - 1; i >= 0; i--) {
    rightProductsArr[i] = rightProducts;
    rightProducts *= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    res[i] = leftProductsArr[i] * rightProductsArr[i];
  }
  return res;
}
