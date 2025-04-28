class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(src, dest) {
        this.adjList[src].push(dest);
        this.adjList[dest].push(src); // undirected graph
    }

    hasPathBFS(src, dest) {
        let queue = [];
        let visited = {};
        queue.push(src);
        visited[src]=true;

        while (queue.length > 0) {
            let curr = queue.shift();
            if (curr === dest) {
                return true;
            }
            for (let neighbor of this.adjList[curr]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor]=true;
                }
            }
        }

        return false;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');

console.log(g.hasPathBFS('A', 'E')); 
console.log(g.hasPathBFS('B', 'E')); 
