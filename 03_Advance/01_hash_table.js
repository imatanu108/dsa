class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size)
    }

    _hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i);
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }

        return Math.abs(sum); // Ensure the index is always non-negative
    }


    set(key, value) {
        const index = this._hashFunction(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this._hashFunction(key);
        const store = this.keyMap[index]
        if (!store) return undefined;
        for (let i = 0; i < store.length; i++) {
            if (store[i][0] === key) return store[i][1];
        }
        return undefined;
    }

    getAllKeys() {
        const keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }

    getAllValues() {
        const values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

const phonebook = new HashTable(5)
// phonebook.set("alex", "111-222-333")
// phonebook.set("Harry", "222-333-444")
// phonebook.set("Harry", "222-133-444")
// phonebook.set("raj", "333-444-555")
// console.log(phonebook.getAllValues())
// console.log(phonebook.getAllKeys())

const wordCounter = (text) => {
    const lowerText = text.toLowerCase()
    const wordMap = {}
    const words = lowerText.trim().replace(".", " ").split(" ")
    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++
        } else {
            wordMap[word] = 1
        }
    }

    return wordMap
}

// console.log(wordCounter("One two two three three three"))

const twoSum = (numbers, target) => {
    const numMap = {}

    for (let i =0; i< numbers.length ; i++) {
        let num = numbers[i]
        let complement = target - num
        if (complement in numMap) {
            return [numMap[complement], i]
        }
        numMap[num] = i
    }

    return []
}

console.log(twoSum([8,4,3,4],8))