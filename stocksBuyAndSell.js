
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

