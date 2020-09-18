
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
  //Time O(log(n)); space O(1);

