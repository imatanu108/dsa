// Problem Statement:
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

const mergeSortedArrays = (nums1, m, nums2, n) => {
    let result = [];
    let i = 0, j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i])
            i++
        } else {
            result.push(nums2[j])
            j++
        }
    }

    return result.concat(nums1.slice(i), nums2.slice(j))
};

console.log(mergeSortedArrays([1,3,5,6],4, [2,4,7,8], 4))