// Problem Statement:
// Given two arrays, write a function to compute their intersection, where each element in the result must appear as many times as it shows in both arrays.
// The result can be in any order.

const intersectionOfArrays = (nums1, nums2) => {
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        let temp = nums1[i]
        if (nums2.includes(temp)) {
            result.push(temp)
            let index = nums2.indexOf(temp)
            nums2.splice(index, 1)
        }
    }
    return result;
};

console.log(intersectionOfArrays([1, 3, 3, 4, 7, 7], [7,7, 9, 1, 3, 4]))