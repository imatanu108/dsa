// reverse string
function reverseStr(string) {
    if (!string.length) return;
    let revStr = ''
    for (i = string.length - 1; i >= 0; i--) {
        revStr = revStr + string[i];
    }
    return revStr;
}

// console.log(reverseStr("Helloooooo"))

// can also be done by converting the string into an array then reverse the array and then join the array to get the reverse string.

const revStr = (str) => str.split("").reverse().join("");
// console.log(revStr("Aplle"))

// Palindrome

// function isPalindrome(str) {
//     let revStr = str.split("").reverse().join("");
//     return str === revStr;
// }

const isPalindrome = (str) => str.split("").reverse().join("") === str;

// console.log(isPalindrome('mom')) // true
// console.log(isPalindrome("Hello")) // false

const reverseInt = (n) => {
    reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}

// console.log(reverseInt(205))


// Sentence Capitalization
// sentece -- split('space')-- map every element and make to upper case and then join

const capitalizeSentece = (str) => {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
}

// console.log(capitalizeSentece("hello world"))

const fizBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        } else if (i % 3 !== 0 && i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else {
            console.log(i)
        }
    }
}

// fizBuzz(20)

// Stock profit challange

// const getMaxProfit = (stockPrices) => {
//     const maxProfitsPerDay = []
//     for (let i = 0; i < stockPrices.length - 1; i++) {
//         let profitsPerDay = []
//         for (let j = i+1; j < stockPrices.length; j++) {
//             let profit = stockPrices[j] - stockPrices[i]
//             profitsPerDay.push(profit)
//         }
//         let maxProfit = Math.max(...profitsPerDay)
//         maxProfitsPerDay.push(maxProfit)
//     }

//     let maxProfit = Math.max(...maxProfitsPerDay)
//     let buyingPriceIndex = maxProfitsPerDay.indexOf(maxProfit)
//     let buyingPrice = stockPrices[buyingPriceIndex]
//     let sellingPrice = maxProfit + buyingPrice

//     return {
//         maxProfit,
//         buyingPrice,
//         sellingPrice,
//     }
// }

const stockPrices = [4, 12, 6, 14, 3, 7]
// optimized

const getMaxProfit = (stockPrices) => {
    if (stockPrices.length < 2) {
        return "Not enough data to calculate profit!";
    }

    let minPrice = stockPrices[0];
    let maxProfit = 0;
    let buyingPrice = stockPrices[0];
    let sellingPrice = stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];

        // Check for potential maximum profit
        const potentialProfit = currentPrice - minPrice;
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
            buyingPrice = minPrice;
            sellingPrice = currentPrice;
        }

        // Update minPrice to the smallest value so far
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }

    return {
        maxProfit,
        buyingPrice,
        sellingPrice,
    };
};

// Example Usage
// console.log(getMaxProfit(stockPrices))
// console.log(getMaxProfit([34, 67, 89, 66, 21, 45, 44, 67, 45]))


// Chunk Array

const chunkArray = (array, size) => {
    let chunkedArray = []
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        chunkedArray.push(chunk);
    }
    return chunkedArray;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

// Two sum

const twoSums = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }

    return "No matching results found."
}

console.log(twoSums([4,7,8,4], 15))
