class Edge {
    constructor(src, dest, wt) {
        this.src = src;
        this.dest = dest;
        this.wt = wt;
    }
}

const V = 5; // number of vertices
const graph = new Array(V);

// initialize each vertex with an empty array
for (let i = 0; i < V; i++) {
    graph[i] = [];
}

// add edges

// at 0-vertex
graph[0].push(new Edge(0, 1, 5));

// at 1-vertex
graph[1].push(new Edge(1, 0, 5));
graph[1].push(new Edge(1, 2, 1));
graph[1].push(new Edge(1, 3, 1));

// at 2-vertex
graph[2].push(new Edge(2, 1, 1));
graph[2].push(new Edge(2, 3, 1));
graph[2].push(new Edge(2, 4, 2));

// at 3-vertex
graph[3].push(new Edge(3, 1, 3));
graph[3].push(new Edge(3, 2, 1));

// at 4-vertex
graph[4].push(new Edge(4, 2, 3));

// print neighbours of vertex 2
for (let i = 0; i < graph[2].length; i++) {
    const e = graph[2][i];
    console.log(e.dest);
}
