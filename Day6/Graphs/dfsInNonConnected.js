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

    dfs(){
        let graph=this.adjList;
       const visited={};
       for(let vertex in graph){
        if(!visited[vertex]){
            this.dfsUtil(vertex,visited);
        }
       }
    }
    dfsUtil(curr,visited){
        let graph=this.adjList;
        //visit
        console.log(curr);
        visited[curr]=true;
        //going to its neighbour
        for(let edge of graph[curr]){
            if(!visited[edge]){
                this.dfsUtil(edge,visited);
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

g.dfs();

