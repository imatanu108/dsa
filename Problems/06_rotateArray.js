// Problem Statement:
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

const rotateArray = (nums, k) => {
    const n = nums.length;
    k = k % n; // If k is greater than n, reduce it by modulo
    let spliced = nums.splice(n - k)
    return [...spliced, ...nums]
};

console.log(rotateArray([1,3,5,6], 11))