const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than the key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr;
};


console.log(insertionSort([1,2,6,7,5,8,9]))