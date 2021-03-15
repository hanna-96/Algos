
//Time O(n^2)
const invalidTransactions =  (transactions) =>{
    let added = new Array(transactions.length).fill(false);
    let invalid = [];
    for (let i = 0; i < transactions.length; i++) {
      const [currentName, currentTime, currentAmount, currentCity] = transactions[
        i
      ].split(",");
  
      if (currentAmount > 1000 && !added[i]) {
        invalid.push(transactions[i]);
        added[i] = true;
      }
  
      for (let j = i + 1; j < transactions.length; j++) {
        const [nextName, nextTime, nextAmount, nextCity] = transactions[j].split(
          ","
        );
  
        if (
          nextName === currentName &&
          nextCity !== currentCity &&
          Math.abs(currentTime - nextTime) <= 60
        ) {
          if (!added[j]) {
            invalid.push(transactions[j]);
            added[j] = true;
          }
          if (!added[i]) {
            added[i] = true;
            invalid.push(transactions[i]);
          }
        }
      }
    }
    return invalid;
  };
  