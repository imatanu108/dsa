// Problem Statement:
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Do not return anything, modify the array in-place instead.

// Constraints:
// - 1 <= nums.length <= 10^4
// - -2^31 <= nums[i] <= 2^31 - 1

// const moveZeroes = (nums) => {
//     let count = 0
//     for (let num of nums) {
//         if (num === 0) {
//             count++
//         }
//     }
//     nums = nums.filter(n => n !== 0)
//     while (count) {
//         nums.push(0)
//         count --
//     }
//     return nums
// };


const moveZeroes = (nums) => {
    let lastNonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            if (i !== lastNonZeroIndex) {
                nums[i] = 0;
            }
            lastNonZeroIndex++;
        }
    }
    return nums
};

console.log(moveZeroes([1, 0, 5, 0, 9, 0, 3, 4, 5]))