//write a function that takes a 'special ' array and returns the product sum.
//A 'special' arr is a non-empty arr that contains either integers or other 'special' arrays.
//The product sum of a special arr is the sum of its elements,where special arrays inside it are summed themselves
//and then multiplied by their level of depth.
//The depth of the arr is how nested it is.([] -> depth =1; [[]]->depth=2...)
//Therefore the product sum of [x,y] = x+y;
//[x,[y,z]]= x+2 *(y+z)
//[x,[y,[z]]] = x+2*(y+3*z)
//Input arr = [5,2,[7,-1],3,[6,[-13,8],4]]
//Output =  12//calculated as: 5+2+2*(7-1)+3+2*(6+3 *(-13+8)+4)

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
//Time O(n) where n is all elements in array(including nested)
//Space O(d) where d is depth of subarrays(3 recursive calls)
function productSum(array, depth = 1) {
  // Write your code here.
  // let depth = 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    //means that arrays is special(nested)
    if (Array.isArray(array[i])) {
      // depth++;
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * depth;
}
