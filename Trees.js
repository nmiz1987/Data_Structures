class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let temp = this.root;
		while (true) {
			if (newNode.value === temp.value) return undefined;
			if (newNode.value < temp.value) {
				if (temp.left == null) {
					temp.left = newNode;
					return this;
				}
				temp = temp.left;
			} else {
				if (temp.right == null) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}
	}

	contains(value) {
		if (!this.root) return false;
		let temp = this.root;
		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value > temp.value) {
				temp = temp.right;
			} else {
				return true;
			}
		}
		return false;
	}

	BFS() {
		let queue = [];
		let results = [];
		if (!this.root) return results;
		queue.push(this.root);
		while (queue.length) {
			if (queue[0].left) queue.push(queue[0].left);
			if (queue[0].right) queue.push(queue[0].right);
			results.push(queue[0].value);
			queue.shift();
		}
		return results;
	}

	DFSPreOrder() {
		// add the nodes from top to bottom
		let results = [];
		function traverse(currentNode) {
			results.push(currentNode.value);
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(this.root);
		return results;
	}

	DFSPostOrder() {
		// add the nodes from bottom to top
		let results = [];
		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
			results.push(currentNode.value);
		}
		traverse(this.root);
		return results;
	}

	DFSInOrder() {
		// add the nodes from bottom to top
		let results = [];
		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			results.push(currentNode.value);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(this.root);
		return results;
	}
}

const myBST = new BST();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);
console.log("DFSPreOrder:", myBST.BFS().toString());
console.log("DFSPreOrder:", myBST.DFSPreOrder().toString());
console.log("DFSPostOrder:", myBST.DFSPostOrder().toString());
console.log("DFSInOrder:", myBST.DFSInOrder().toString());
