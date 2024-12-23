# **DSA (Data Structures and Algorithms) Notes**

## **1. What is DSA?**
- **Data Structures (DS)**: Efficient ways to store and organize data, enabling faster and optimized operations like searching, sorting, and modification.
- **Algorithms (A)**: A series of steps or procedures to solve problems in the most efficient way.

---

## **2. Big-O Notation**
- **Definition**: A way to measure the performance of an algorithm by describing how it scales with input size.
- **Key Aspects**:
  - **Time Complexity**: How runtime changes with input size.
  - **Space Complexity**: How memory usage changes with input size.

### Common Time Complexities:
- **O(1)**: Constant time. Example: Accessing an array element by index.
- **O(n)**: Linear time. Example: Iterating over an array.
- **O(n²)**: Quadratic time. Example: Nested loops.
- **O(log n)**: Logarithmic time. Example: Binary search in a sorted array.

---

## **3. Arrays**
- **Definition**: A collection of elements stored in contiguous memory locations.
- **Example**: `[10, 20, 30, 40]`

### Operations:
- **Access**: Retrieve an element by index. `O(1)`
- **Search**: Find an element. `O(n)`
- **Insert/Delete**: Requires shifting elements. `O(n)`

---

## **4. Linked Lists**
- **Definition**: A data structure where elements (nodes) are connected by pointers.
- **Types**:
  - **Singly Linked List**: Nodes point to the next node.
  - **Doubly Linked List**: Nodes point to both previous and next nodes.

### Operations:
- **Push**: Add a node at the end. `O(1)`
- **Pop**: Remove a node from the end. `O(n)`
- **Insert/Delete**: Add or remove nodes at specific positions. `O(n)`

---

## **5. Stacks**
- **Definition**: A linear data structure following LIFO (Last In, First Out).
- **Example**: Browser history, undo operations.

### Operations:
- **Push**: Add an element to the stack. `O(1)`
- **Pop**: Remove the top element. `O(1)`

---

## **6. Queues**
- **Definition**: A linear data structure following FIFO (First In, First Out).
- **Example**: Print queues, task scheduling.

### Operations:
- **Enqueue**: Add an element to the back. `O(1)`
- **Dequeue**: Remove an element from the front. `O(1)`

---

## **7. Hash Tables**
- **Definition**: A data structure that maps keys to values using a hash function.
- **Example**: `{ "name": "Alice", "age": 25 }`

### Operations:
- **Insert/Search/Delete**: Perform these operations efficiently. `O(1)` (on average)

---

## **8. Trees**
- **Definition**: A hierarchical data structure with nodes connected by edges.
- **Binary Search Tree (BST)**:
  - Left child < Parent.
  - Right child > Parent.

### Operations:
- **Insert/Search**: Add or find a value. `O(log n)` (balanced tree)

---

## **9. Tree Traversals**
- **Definition**: Visiting all nodes in a tree in a specific order.

### **Breadth-First Search (BFS)**:
- Visits nodes level by level.
- Uses a queue.
```javascript
function bfs(root) {
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```

### **Depth-First Search (DFS)**:
- Explores as far as possible along each branch before backtracking.
- Three types:
  1. **Preorder (Node → Left → Right)**:
     ```javascript
     function preorder(node) {
         if (!node) return;
         console.log(node.value);
         preorder(node.left);
         preorder(node.right);
     }
     ```
  2. **Inorder (Left → Node → Right)**:
     ```javascript
     function inorder(node) {
         if (!node) return;
         inorder(node.left);
         console.log(node.value);
         inorder(node.right);
     }
     ```
  3. **Postorder (Left → Right → Node)**:
     ```javascript
     function postorder(node) {
         if (!node) return;
         postorder(node.left);
         postorder(node.right);
         console.log(node.value);
     }
     ```

---

## **10. Graphs**
- **Definition**: A collection of vertices (nodes) and edges (connections between nodes).
- **Types**:
  - **Directed**: Edges have direction.
  - **Undirected**: Edges have no direction.
  - **Weighted**: Edges have weights.

### Operations:
- **Add Vertex**: Add a node to the graph.
- **Add Edge**: Connect two nodes.
- **Remove Edge/Vertex**: Disconnect or delete nodes.

---

## **11. Sorting Algorithms**
- **Bubble Sort**: Compare and swap adjacent elements until sorted. `O(n²)`
- **Selection Sort**: Select the smallest element and place it in the correct position. `O(n²)`
- **Insertion Sort**: Insert each element in its correct position. `O(n²)`
- **Merge Sort**: Divide and merge sorted arrays. `O(n log n)`

---

## **12. Recursion**
- **Definition**: A function that calls itself to solve smaller subproblems.
- **Example**:
  ```javascript
  function factorial(n) {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
  }
  ```

---

## **13. Binary Search**
- **Definition**: An efficient algorithm to search for a value in a sorted array.
- **Time Complexity**: `O(log n)`
- **Example**:
  ```javascript
  function binarySearch(arr, target) {
      let left = 0, right = arr.length - 1;
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) return mid;
          if (arr[mid] < target) left = mid + 1;
          else right = mid - 1;
      }
      return -1;
  }
  ```

---

## **14. Two Sum**
- **Definition**: Find two numbers in an array that sum up to a target value.
- **Optimized Solution**:
  ```javascript
  function twoSum(nums, target) {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) return [map.get(complement), i];
          map.set(nums[i], i);
      }
      return [];
  }
  ```

---
