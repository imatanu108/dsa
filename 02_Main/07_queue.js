// FIFO - first in first out

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.length) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this.length
    }

    dequeue() {
        if (!this.length) return null;

        const temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = temp.next
            temp.next = null
        }

        this.length--
        return temp
    }
}

const myQueue = new Queue(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue)
console.log(myQueue.dequeue())
console.log(myQueue)