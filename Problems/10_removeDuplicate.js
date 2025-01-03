// Problem Statement:
// Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
        console.log(nums)
    }
    nums.splice(uniqueIndex + 1);
    return nums.length;
};


console.log(removeDuplicates([1, 1, 2, 3, 3]))
