// multiplicationTable(3, 5);
// ```

// ```
//  -- C O L U M N S --
// #    1    2    3    4    5
// R    2    4    6    8    10
// O    3    6    9    12   15
// W
// S
// const threeByFive = multiplicationTable(3, 5);
// threeByFive === [[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15]]
// ```

function multiplicationTable(rows, col) {
  let resArr = [];
  for (let i = 1; i <= rows; i++) {
    let row1 = [];
    for (let j = 1; j <= col; j++) {
      row1.push(i * j);
    }
    resArr.push(row1);
  }
  return resArr;
}
console.log(multiplicationTable(3, 5));
