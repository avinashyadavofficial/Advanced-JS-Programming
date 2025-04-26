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

    // bfs(start) {
    //     const queue = [start];
    //     const visited = new Set();
    //     visited.add(start);

    //     while (queue.length > 0) {
    //         const vertex = queue.shift();
    //         console.log(vertex); 

    //         for (let neighbor of this.adjList[vertex]) {
    //             if (!visited.has(neighbor)) {
    //                 visited.add(neighbor);
    //                 queue.push(neighbor);
    //             }
    //         }
    //     }
    // }
    bfs(start) {
        // const visited = new Array(this.size).fill(false);
        const visited={};
        const queue = [];
        let graph=this.adjList;
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

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');

g.bfs('A'); //  A B C D E
