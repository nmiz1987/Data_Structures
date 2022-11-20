class Node {
	constructor(value) {
		this.value = value;
	}
}
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
			return true;
		}
		return false;
	}

	addEdge(vertex1, vertex2) {
		if (vertex1 !== vertex2) {
			if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
				this.adjacencyList[vertex1].push(vertex2);
				this.adjacencyList[vertex2].push(vertex1);
				return true;
			}
		}
		return false;
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
				(v) => v !== vertex2
			);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
				(v) => v !== vertex1
			);
			return true;
		}
		return false;
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return undefined;
		this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex, v));
		delete this.adjacencyList[vertex];
		return this;
	}
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "C");
console.log(myGraph.adjacencyList);
myGraph.removeVertex("A");
console.log(myGraph.adjacencyList);
