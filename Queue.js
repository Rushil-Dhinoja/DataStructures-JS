class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek() {
    return this.first;
  }
  enqueue() {}
  dequeue() {}
}
