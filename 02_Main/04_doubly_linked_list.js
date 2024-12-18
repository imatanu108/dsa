// doubly linkedlist
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let temp = this.tail // accessing the tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev; // Move the tail pointer to the previous node.
            this.tail.next = null; // Detach the old tail from the list.
            temp.prev = null; // Detach the old tail's prev pointer.
        }
        this.length--;
        return temp
    }

    unshift(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            let temp = this.head
            temp.prev = newNode
            this.head = newNode
            newNode.next = temp
        }

        this.length++
        return this
    }

    shift() {
        if (!this.head) return null;

        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = temp.next
            this.head.prev = null
            temp.next = null
        }

        this.length--;
        return temp;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(5)
// myDoublyLinkedList.push(3)
// console.log(myDoublyLinkedList)
// console.log(myDoublyLinkedList.pop())
// myDoublyLinkedList.unshift(0)
console.log(myDoublyLinkedList.shift())
console.log(myDoublyLinkedList)
