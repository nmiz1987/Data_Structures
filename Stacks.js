class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}

	print() {
		let res = "Top -> ";
		let tmp = this.top;
		for (let i = 0; i < this.length; i++) {
			res += `${tmp.value} -> `;
			tmp = tmp.next;
		}
		res += tmp;
		return res;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		let temp = this.top;
		this.top = this.top.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}

const myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);
console.log(myStack.print());
console.log(myStack.pop());
console.log(myStack.pop());
