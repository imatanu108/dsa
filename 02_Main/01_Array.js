class MyArray {
    constructor () {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item;
        this.length ++;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }

    shift() {
        if (!this.length) {
            console.log("This array is empty.")
            return;
        }
        const firstItem = this.data[0]
        delete this.data[0]
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length --;
        return firstItem;
    }
}

const myNewArray = new MyArray()
myNewArray.push("Mango")
myNewArray.push('Apple')
// console.log(myNewArray.get(1))
// console.log(myNewArray.pop())
console.log(myNewArray.shift())
console.log(myNewArray.shift())
console.log(myNewArray.shift())
console.log(myNewArray)
