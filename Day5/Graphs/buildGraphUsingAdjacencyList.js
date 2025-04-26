class Graph{
    constructor(adjacencyList){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }
    addEdge(v1,v2){ //undirected graph so no direction so push in both
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    showConnections(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${this.adjacencyList[vertex]}`);
        }
    }
}
const graph=new Graph();
let vertex=['A','B','C'];
for(let i of vertex){
    graph.addVertex(i);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','C');
graph.showConnections();
