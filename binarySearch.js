
function binarySearch(array, target) {
      let start = 0;
      let end = array.length-1;
      while(start<=end){
          let middle = Math.floor((start + end)/2);
          if(array[middle] === target) return middle;
          else if(target < array[middle]){
          end =	middle -1;
          }else{
              start = middle+1;
          }	
  }
   return -1;
      
  }
  //Time O(log(n)); where n- number of elements in the arr, log(n) because we're eliminating half of out input
  //every time we loop through our input
   //space O(1);

