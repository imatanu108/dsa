// Problem Statement:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.
//
// A string is valid if:
// 1. Open brackets are closed by the same type of brackets.
// 2. Open brackets are closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.
//
// Constraints:
// - 1 <= s.length <= 10^4

const isValidParentheses = (s) => {
    let stack = []

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }
        if (char === ")" || char === "}" || char === "]") {
            let temp = stack.pop()
            if (char === ")" && temp !== "(") return false;
            if (char === "}" && temp !== "{") return false;
            if (char === "]" && temp !== "[") return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidParentheses("({}[])"))