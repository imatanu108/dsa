// Problem Statement:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram is a word or phrase formed by rearranging the letters of another, 

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let keyMap = {}

    for (let char of s) {
        if (!keyMap[char]) {
            keyMap[char] = 1
        } else {
            keyMap[char]++
        }
    }

    for (let char of t) {
        if (!keyMap[char]) return false;
        keyMap[char]--
    }

    return true;
};

console.log(isAnagram("care", "rac"))