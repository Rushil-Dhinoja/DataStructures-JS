class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Using Array
class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    this.array.pop();
    return this.array;
  }
}
//Using Array

class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top && !this.bottom) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      newNode.next = holdingPointer;
      this.top = newNode;
    }
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    return this;
  }
}

// const myStack = new Stack();
// console.log(myStack.push(10));
// console.log(myStack.push(20));
// console.log(myStack.push(30));
// console.log(myStack);

const myLinkedListStack = new StackLinkedList();
myLinkedListStack.push(10);
myLinkedListStack.push(15);
myLinkedListStack.push(20);
console.log(myLinkedListStack.peek());

console.log(myLinkedListStack);
