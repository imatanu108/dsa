const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j]< arr[minIndex]) {
                minIndex = j
            }
        }

        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
        
    }
    return arr
}

console.log(selectionSort([5,6,3,2,1,4]))