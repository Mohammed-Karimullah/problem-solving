/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];  
    let sell = 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
         buy = Math.min(buy, prices[i]);
         sell = prices[i] - buy;
         profit = Math.max(profit, sell);
    }
   return profit;
};