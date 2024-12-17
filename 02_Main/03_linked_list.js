// singly linkedlist
// creating a node

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
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
            return
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    pop() {
        if (!this.tail || !this.length) return "The linkedlist is empty.";
        let poppedNode;
        if (this.length === 1) {
            poppedNode = this.head;
            this.head = null
            this.tail = null
        } else {
            let currentNode = this.head
            // Traverse to the second-last node
            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next
            }
            poppedNode = this.tail
            this.tail = currentNode
            currentNode.next = null

            // temp-prev approach
            // let temp = this.head;
            // let prev = null;

            // // Traverse to the last node
            // while (temp.next) {
            //     prev = temp; // Keep track of the second-last node
            //     temp = temp.next; // Move to the next node
            // }

            // poppedNode = temp; // Save the last node
            // this.tail = prev; // Update tail to second-last node
            // prev.next = null; // Detach the old tail
        }
        this.length--;
        return poppedNode;
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    shift() {
        if (!this.head) return "Linked list is empty."
        let poopedHead = this.head
        this.head = this.head.next

        if (!this.head) { // If the list becomes empty
            this.tail = null; // Update tail to null
        }

        this.length--;
        return poopedHead;
    }

    getLast() {
        if (!this.head) return null;

        let temp = this.head
        while (temp.next) {
            temp = temp.next
        }

        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return "Invalid index.";
        let temp = this.head

        // method-1
        // for (let i = 0; counter === index; i++) {
        //     temp = temp.next
        //     counter++;
        // }
        // return temp

        // method-2
        let counter = 0
        while (temp) {
            if (counter === index) return temp;
            counter++;
            temp = temp.next
        }
    }

    set(index, value) {
        if (index < 0 || index >= this.length) return "Invalid index.";

        let temp = this.head
        let counter = 0
        while (temp) {
            if (counter === index) {
                temp.value = value
                return temp
            }
            counter++;
            temp = temp.next
        }

        // we can also use get method here
    }

}

const myLinkedList = new LinkedList(1);
myLinkedList.push(5);
myLinkedList.push(15);
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// myLinkedList.unshift(90);
// console.log(myLinkedList);
// console.log(myLinkedList.shift());
// console.log(myLinkedList);
console.log(myLinkedList.set(1, 40));




