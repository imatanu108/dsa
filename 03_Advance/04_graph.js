class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vtx) {
        if (!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = []
            return true
        }
        return false
    }

    addEdge(vtx1, vtx2) {
        if (!this.adjacencyList[vtx1]) this.adjacencyList[vtx1] = [];
        if (!this.adjacencyList[vtx2]) this.adjacencyList[vtx2] = [];
        if (!this.adjacencyList[vtx1].includes(vtx2)) {
            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
            return true
        }
        return false
    }

    removeEdge(vtx1, vtx2) {
        if (!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2] || !this.adjacencyList[vtx1].includes(vtx2)) {
            return false;
        }
        this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((vtx) => vtx !== vtx2)
        this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((vtx) => vtx !== vtx1)
        return true
    }

    removeVtx(vtx) {
        if (!this.adjacencyList[vtx]) return undefined;
        this.adjacencyList[vtx].map(neighbour => {
            this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter(v => v !== vtx)
        })
        delete this.adjacencyList[vtx]
        return this
    }
}

const myGraph = new Graph()
myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
myGraph.addEdge("A", "B")
myGraph.addEdge("C", "B")
myGraph.addEdge("A", "C")
console.log(myGraph)
myGraph.removeVtx("A")
console.log(myGraph)