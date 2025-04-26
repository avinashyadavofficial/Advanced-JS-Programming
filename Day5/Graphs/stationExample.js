class Edge{
    constructor(src,dest,wt){
        this.src=src;
        this.dest=dest;
        this.wt=wt;
    }
}
class Graph{
    constructor(adjList){
        this.adjList={};
    }
    addVertex(v){
        if(!this.adjList[v]){
           this.adjList[v]=[];
        }
    }
    addEdge(src,dest,wt){
        const edge=new Edge(src,dest,wt);
        this.adjList[src].push(edge);
    }
    showConnections(){
        for(let vertex in this.adjList){
            const edges=this.adjList[vertex].map(edge=>`${edge.dest} (${edge.wt})`).join(',');
            console.log(`${vertex} -> ${edges}`);
        }
    }
    // showConnections() {
    //     for (let vertex in this.adjList) {
    //         let edges = this.adjList[vertex];
    //         let line = vertex + " -> ";
    //         for (let edge of edges) {
    //             line += edge.dest + "(" + edge.wt + ")";
    //         }
    //         console.log(line);
    //     }
    // }
}
const graph=new Graph();
let stations=['A','B','C','D'];
for(let station of stations){
    graph.addVertex(station);
}
graph.addEdge('A','B',10);
graph.addEdge('A','C',15);
graph.addEdge('B','D',20);
graph.addEdge('C','D',30);
graph.showConnections();
