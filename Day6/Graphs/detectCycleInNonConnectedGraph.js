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

    detectCycle() {
        let graph = this.adjList;
        const visited = {};  
        for (let vertex in graph) {
            if (!visited[vertex]) {
                if(this.detectCycleUtil(vertex, visited,-1)){//-1 as parent of vertex bcz starting vertex has no parent
                    return true;
                }
            } 
        }
        return false;
    }
    detectCycleUtil(curr,visited,parent){
        let graph = this.adjList;
        visited[curr]=true;
        for(let edge of graph[curr]){
            //here edge is neighbour of curr vertex
            //case 3
            if(!visited[edge]){
                if(this.detectCycleUtil(edge,visited,curr)){
                   return true;
                }
            }
            //case 1
            else if(visited[edge] && edge!=parent){
                return true;
            }
        }
        return false;
    }
}


const g = new Graph();
g.addVertex(1);
g.addVertex(0);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(0, 3);
g.addEdge(2, 4);


console.log(g.detectCycle());
