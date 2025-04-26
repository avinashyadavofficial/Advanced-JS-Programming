class Edge {
    constructor(src, dest, wt) {
        this.src = src;
        this.dest = dest;
        this.wt = wt;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(src, dest, wt) {
        const edge1 = new Edge(src, dest, wt);
        const edge2 = new Edge(dest, src, wt); // for undirected
        this.adjacencyList[src].push(edge1);
        this.adjacencyList[dest].push(edge2);
    }

    showConnections() {
        for (let vertex in this.adjacencyList) {
            const connections = this.adjacencyList[vertex]
                .map(edge => `${edge.dest}(${edge.wt})`)
                .join(", ");
            console.log(`${vertex} -> ${connections}`);
        }
    }
}
const graph=new Graph();
let vertex=['A','B','C'];
for(let i of vertex){
    graph.addVertex(i);
}
graph.addEdge('A','B',10);
graph.addEdge('A','C',20);
graph.addEdge('B','C',30);
graph.showConnections();