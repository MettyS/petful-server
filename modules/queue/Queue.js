class Node {
  constructor(value, previous, next) {
    this.previous = previous;
    this.value = value;
    this.next = next;
  }

  setNext (node) {
    this.next = node;
  }

  setPrevious (node) {
    this.previous = node;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    // Set initial data.
  }

  enqueue(data) {
    if(!this.head)
      this.head = new Node(data, null, null);
    else if(!this.tail){
      this.tail = new Node(data, this.head, this.head);
      this.head.setNext(this.tail)
      this.head.setPrevious(this.tail);
    }
    else {
      const node = new Node(data, this.tail, this.head);
      this.tail.setNext(node);
      this.head.setPrevious(node);

      this.tail = node;
    }
    this.length += 1;
    // Add some data to the queue.
  }

  dequeue() {
    const dequedNode = this.head;

    if(dequedNode) {
      this.length -= 1;
      this.head = this.head.next;
      if(!this.head)
        return dequedNode;
      if(this.head === this.tail){
        this.head.setNext(null);
        this.head.setPrevious(null);
        this.tail = null;
      }
      else {
        this.head.setPrevious(this.tail);
        this.tail.setNext(this.head);
      }
      return dequedNode.value
    }
    else
      return dequedNode;

    // Remove some data from the queue.
  }

  show() {
    return this.head ? this.head.value : null;
    // Return the next item in the queue.
  }

  all() {
    let ar = [];
    let marker = this.head;
    for(let i = 0; ( (i < this.length) && marker); i++) {
      ar.push(marker.value);
      marker = marker.next;
    }
    return ar;
    // Return all items in the queue.
  }
}

module.exports = Queue
