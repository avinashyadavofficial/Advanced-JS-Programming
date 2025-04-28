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

    bfs() {
        let graph = this.adjList;
        const visited = {};  // single visited object for entire traversal
        for (let vertex in graph) {
            if (!visited[vertex]) {
                this.bfsUtil(vertex, visited);
            }
        }
    }

    bfsUtil(start, visited) {
        const queue = [];
        let graph = this.adjList;
        queue.push(start);
        visited[start] = true;

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            for (let neighbor of graph[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}


const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');
g.addVertex('H');
g.addVertex('I');

g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('F', 'H');
g.addEdge('G', 'H');

g.bfs();
