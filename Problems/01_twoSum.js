// Problem 1: Two Sum (Easy)
// Problem Statement: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// time complexity - O(n)
const twoSum = (numbers, target) => {
    let numMap = {}

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        let complement = target - num
        if (complement in numMap) {
            return [numMap[complement], i]
        }
        numMap[num] = i
    }
    return []
}

// time complexity - O(n^2) -Brute Force approach
// const twoSum = (numbers, target) => {
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i]
//         let complement = target - num
//         for (let j = 0; j < i; j++) {
//             if (complement === numbers[j]){
//                 return [j, i]
//             }
//         }
//     }
//     return []
// }

console.log(twoSum([2, 7, 11, 15], 13))


