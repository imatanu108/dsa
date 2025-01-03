// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the i th day.
// You want to maximize your profit by choosing a single day to buy one stock and a different day to sell it. Return the maximum profit you can achieve.
// If no profit can be achieved, return 0.
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5

// const getMaxProfit = (prices) => {
//     if (prices.length < 2) return;
//     let buyingPrice = prices[0]
//     let sellingPrice = prices[1]
//     let maxProfit = sellingPrice - buyingPrice

//     for (let i = prices.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             let profit = prices[i] - prices[j]
//             if (profit > maxProfit) {
//                 maxProfit = profit
//                 buyingPrice = prices[j]
//                 sellingPrice = prices[i]
//             }
//         }
//     }
//     return {maxProfit, buyingPrice, sellingPrice}
// }

const getMaxProfit = (prices) => {
    if (prices.length < 2) return { maxProfit: 0, buyingPrice: null, sellingPrice: null };

    let minPrice = prices[0];
    let maxProfit = 0;
    let buyingPrice = prices[0];
    let sellingPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
            buyingPrice = minPrice;
            sellingPrice = prices[i];
        }

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    return { maxProfit, buyingPrice, sellingPrice };
};

console.log(getMaxProfit([7, 1, 15, 3, 6, 4]))