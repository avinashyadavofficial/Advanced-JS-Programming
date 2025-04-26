class Graph {
    constructor() {
        this.adjList = [];
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


    dfs(curr,visited){
        let graph=this.adjList;
        //visit
        console.log(curr);
        visited[curr]=true;
        //going to its neighbour
        for(let edge of graph[curr]){
            if(!visited[edge]){
                this.dfs(edge,visited);
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
// const visited = new Array(g.length).fill(false);
const visited={};
g.dfs('A',visited); //  A B C D E
