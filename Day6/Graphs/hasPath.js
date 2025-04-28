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
    dfs(src,dest,visited){
        let graph=this.adjList;
        visited[src]=true;
        for(let edge of graph[src]){
            if(edge==dest){
                return true;
            }
            if(!visited[edge] && this.dfs(edge,dest,visited)){
                return true;
                      
            }
            
        }
        return false;
    }
    hasPath(src,dest){
        let visited={};
        return this.dfs(src,dest,visited);
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
let ans=g.hasPath('A','E'); 
console.log(ans);
