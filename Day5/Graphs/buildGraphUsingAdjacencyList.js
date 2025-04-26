class Graph{
    constructor(adjacencyList){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }
    //for unweighted
    addEdge(v1,v2){ //undirected graph so no direction so push in both
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // //for weighted
    // addEdge(vertex1, vertex2, weight) {
    //     this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
    //     this.adjacencyList[vertex2].push({node: vertex1, weight: weight}); // if undirected
    //   }
    showConnections(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${this.adjacencyList[vertex]}`);
        }
    }
    //for weighted
    // showConnections() {
    //     for (let vertex in this.adjacencyList) {
    //         const connections = this.adjacencyList[vertex]
    //             .map(edge => `${edge.node}(${edge.weight})`)
    //             .join(", ");
    //         console.log(`${vertex} -> ${connections}`);
    //     }
    // }
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
