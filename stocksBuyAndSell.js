// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction
// // (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
const solution = (prices) => {
    // Type your solution here
    //[6,0,-1,10]
    if(!prices.length) return 0;
    let min = prices[0]; //6; -6
    let maxProfit = prices[1]-prices[0]; //-6 5
    for(let i=1;i<prices.length;i++){
       let currentProfit = prices[i]-min; //-6 5
        if(currentProfit>maxProfit){
            maxProfit = currentProfit;
        }
        if(prices[i]<min){
            min = prices[i] //-6
        }   
    }
    return maxProfit;
};

//naive solution
var maxProfit = function(prices) {
    //i = days
    // el[i]= > price
    //figure out at what day(i) the price is lowest(el[i])=?then buy
    //figure out at what day (i) the price(el[i]) is highest =>then sell it
  let  maxprofit = 0;
    //need to find the max difference between buying and selling( between any two numbers from the array)
    //buy at the lowest price
    //sell at the highest
    for(let i = 0;i<prices.length;i++){
       for(let j=i+1;j<prices.length;j++){
           let profit = prices[j]-prices[i];
           if(maxprofit<profit) maxprofit = profit;
       }
    }
    return maxprofit;
};
//Time O(n^2);
//Space O(1)

