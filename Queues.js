class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		const newNode = new Node(value);
		this.first = newNode;
		this.last = newNode;
		this.length = 1;
	}

	print() {
		let res = "First -> ";
		let tmp = this.first;
		for (let i = 0; i < this.length; i++) {
			res += `${tmp.value} -> `;
			tmp = tmp.next;
		}
		res += `Last`;
		return res;
	}

	// add
	enqueue(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (this.length === 0) return undefined;

		let temp = this.first;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
}

const myQueue = new Queue(11);
myQueue.enqueue(3);
myQueue.enqueue(23);
myQueue.enqueue(7);
console.log(myQueue.print());
console.log("dequeue:", myQueue.dequeue());
console.log(myQueue.print());
