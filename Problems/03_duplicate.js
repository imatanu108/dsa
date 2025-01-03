// Problem Statement:
// Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.

// const checkDuplicate = (numbers) => {
//     let numMap = {}
//     for (let i = 0; i < numbers.length; i++) {
//         let temp = numbers[i]
//         if (temp in numMap) return true;
//         numMap[temp] = i
//     }
//     return false
// }

const checkDuplicate = (numbers) => {
    const seen = new Set();

    for (const num of numbers) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
};

console.log(checkDuplicate([1, 6, 5, 3]))