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
    toCheckBiPartiteGraph(){
        let graph=this.adjList;
        let color={};//use object instead of array
        let queue=[];
        for(let vertex in graph){
            color[vertex]=-1;
        }
        for(let vertex in graph){
            if(color[vertex]==-1){
                //perform bfs
                queue.push(vertex);
                color[vertex]=0;
                while(queue.length>0){
                    let curr=queue.shift();
                    for(let edge of graph[curr]){
                        //case 3
                        if(color[edge]==-1){
                            let newColor=color[curr]==0?1:0;
                            color[edge]=newColor;
                            queue.push(edge);
                        }
                        else if(color[edge]==color[curr]){
                            return false;
                        }
                    }
                }
            }
        }
        return true;
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
g.addEdge('A','C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('F', 'H');
g.addEdge('G', 'H');

console.log(g.toCheckBiPartiteGraph());
