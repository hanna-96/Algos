//Time O(n^2)
const invalidTransactions = (transactions) => {
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

//More optimal solution
var invalidTransactions = function (transactions) {
  let info = [];
  // collect all data of each transaction and store it in info array together with the current transaction
  for (let transaction of transactions) {
    let [name, time, amount, city] = transaction.split(",");
    info.push({ name, time, amount, city, raw: transaction });
  }
  //sort the info array by  time in ascending order
  info.sort((a, b) => Number(a.time) - Number(b.time));

  let invalidIdx = new Set();
  let invalidTransactions = [];

  // check each transaction for the amount
  for (let i = 0; i < info.length; i++) {
    if (info[i].amount > 1000) {
      if (!invalidIdx.has(i)) {
        // check if we added this transaction as invalid before
        invalidTransactions.push(info[i].raw);
        invalidIdx.add(i); //mark it as already added to invalid arr , to avoid dublicates in the future
      }
    }
  }
  // Now loop through info array and compare each transaction with each other
  for (let i = 0; i < info.length - 1; i++) {
    let curr = info[i];
    for (let next = i + 1; next < info.length; next++) {
      if (info[next].time - curr.time > 60) break; // they are not invalid, so skip it
      if (info[next].name === curr.name && info[next].city !== curr.city) {
        if (!invalidIdx.has(i)) {
          invalidTransactions.push(curr.raw);
          invalidIdx.add(i);
        }
        if (!invalidIdx.has(next)) {
          invalidTransactions.push(info[next].raw);
          invalidIdx.add(next);
        }
      }
    }
  }
  return invalidTransactions;
};
