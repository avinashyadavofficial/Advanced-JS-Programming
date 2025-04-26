class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  }

  function addVertex(graph, vertex) {
    if (!graph.adjacencyList[vertex]) {
      graph.adjacencyList[vertex] = [];
    }
  }
  
  function addEdge(graph, vertex1, vertex2) {
    graph.adjacencyList[vertex1].push(vertex2);
    graph.adjacencyList[vertex2].push(vertex1);
  }
  
  function showConnections(graph) {
    for (let vertex in graph.adjacencyList) {
      console.log(vertex + " -> " + graph.adjacencyList[vertex].join(", "));
    }
  }
  
  const g = new Graph();
  addVertex(g, 'A');
  addVertex(g, 'B');
  addVertex(g, 'C');
  addEdge(g, 'A', 'B');
  addEdge(g, 'A', 'C');
  addEdge(g, 'B', 'C');
  showConnections(g);
  