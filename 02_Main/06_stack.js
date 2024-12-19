// LIFO - last in first out

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (!this.first || !this.length) {
            this.first = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.length++
    }

    pop() {
        if (!this.first || !this.length) return null;

        let temp = this.first
        this.first = temp.next
        temp.next = null
        this.length--
        return temp
    }

    min() {
        if (!this.length) return null;

        let min = this.first.value
        let temp = this.first

        while (temp.next) {
            temp = temp.next
            if (min > temp.value) {
                min = temp.value
            };
        }

        return min;
    }
}

const myStack = new Stack(0)
myStack.push(1)
myStack.push(2)
// console.log(myStack.pop())
// console.log(myStack.min())

function isValidParentheses(str) {
    // Stack to store opening parentheses
    const stack = [];
    
    // Mapping of closing parentheses to their corresponding opening ones
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of str) {
        // If the character is an opening parenthesis, push it to the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If the character is a closing parenthesis
        else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty (no matching opening parenthesis)
            if (stack.length === 0) {
                return false;
            }
            
            // Pop the top item from the stack and check if it matches
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all parentheses are matched, otherwise not
    return stack.length === 0;
}
// console.log(isValidParentheses('()'))

const reverseString = (str) => {
    const stack = []
    let revStr = ''
    for (let char of str) {
        stack.push(char)
    }
    while(stack.length) {
        let char = stack.pop()
        revStr += char
    }
    return revStr
}

console.log(reverseString("Hello world"))
