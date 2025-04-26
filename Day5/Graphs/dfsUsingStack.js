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

    dfsStack(start) {
        let graph=this.adjList;
        const visited = {};
        const stack = [start];

        while (stack.length > 0) {
            const curr = stack.pop();

            if (!visited[curr]) {
                console.log(curr);
                visited[curr] = true;

                // push neighbors to stack
                for (let neighbor of graph[curr]) {
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
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

g.dfsStack('A'); // Output: A C E B D 
