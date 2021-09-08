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

const myStack = new Stack();
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.push(30));
console.log(myStack);
