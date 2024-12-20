function countDown(value) {
    console.log(value)
    if (value === 0) return;
    countDown(value - 1)
}

// countDown(10)

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))