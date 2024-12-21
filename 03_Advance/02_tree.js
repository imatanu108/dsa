// Binary Search Tree

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            return
        }

        let temp = this.root
        while (true) {
            if (value < temp.value) {
                // if temp left is empty
                if (!temp.left) {
                    temp.left = newNode
                    break
                }
                temp = temp.left
            } else if (value > temp.value) {
                // if temp right is empty
                if (!temp.right) {
                    temp.right = newNode
                    break
                }
                temp = temp.right
            } else {
                console.log("Duplicate values are not allowed in this BST");
                break;
            }
        }
        return this
    }

    includes(value) {
        if (!value) {
            console.error("Invalid input!");
            return false;
        }
        let temp = this.root
        while (temp) {
            if (value === temp.value) return true; // Value found
            temp = value < temp.value ? temp.left : temp.right;
        }
        return false
    }

    bfs() {
        let current = this.root
        let queue = []
        let data = []

        queue.push(current)

        while (queue.length) {
            current = queue.shift()
            data.push(current.value)
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right)
        }

        return data;
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) return data;
            
        data.push(node.value);
        if (node.left) this.dfsPreOrder(node.left, data);
        if (node.right) this.dfsPreOrder(node.right, data);
        return data;
    }

    dfsPostOrder(node = this.root, data = []) {
        if (node === null) return data;

        if (node.left) this.dfsPostOrder(node.left, data);
        if (node.right) this.dfsPostOrder(node.right, data);
        data.push(node.value);
        return data
    }

    dfsInorder(node = this.root, data = []) {
        if (node === null) return data;

        if (node.left) this.dfsInorder(node.left, data);
        data.push(node.value);
        if (node.right) this.dfsInorder(node.right, data);
        return data
    }
}

const tree = new BST()
tree.insert(5)
tree.insert(3)
tree.insert(8)
tree.insert(1)
tree.insert(7)
tree.insert(9)
// console.log(tree.includes(7))
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInorder())
