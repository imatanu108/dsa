function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    let i = 0, j = 0;

    // Loop until one of the arrays is exhausted
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    // If there are any remaining elements in left or right, append them
    return result.concat(left.slice(i), right.slice(j))
}

console.log(merge([1, 3, 5, 7], [2, 4, 6]))

console.log(mergeSort([34, 6, 27, 2, 14, 6, 18]))
