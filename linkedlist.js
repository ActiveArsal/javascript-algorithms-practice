// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while(node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst(){
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let node = this.head;
		while(node) {
			if(!node.next){
				return node;
			}

			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head) {
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if(this.head && this.head.next) {
			let node = this.head;
			while(node && node.next && node.next.next){
				node = node.next;
			}
			node.next = null;
		}
		else {
			this.head = null;
		}
	}

	insertLast(data) {
		const last = this.getLast();

		if(last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(integer) {
		let node = this.head;
		let counter = 0;

		while(node && counter <= integer) {
			counter++;
			node = node.next;
		}	

		return node;
	}

	removeAt(integer) {
		let node = this.getAt(integer);
		if(!node) {
			return;
		}

		let previous = this.getAt(integer - 1);
		if(previous && node.next) {
			previous.next = node.next;
			return;
		}

		if(!previous && node.next) {
			this.head = node.next;
			return;
		}

		if(previous && !node.next) {
			previous.next = null;
			return;
		}
	}

	insertAt(data, integer) {
		if(!this.head || integer === 0) {
			this.insertFirst(data);
			return;
		}

		const prev = this.getAt(integer - 1);

		if(prev && prev.next) {
			prev.next = new Node(data, prev.next);
		} else {
			this.insertLast(data);
		}
	}

	
}