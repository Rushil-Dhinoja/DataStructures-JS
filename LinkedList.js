class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //Inserting at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const holdingPointer = this.head;
      newNode.next = holdingPointer;
      this.head = newNode;
    }
  }
  //Inserting at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  //Insert at Index
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    const leader = this.traverseToIndex(index - 1);
    if (!leader) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
  }
  //Delete By Index
  deleteByIndex(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = holdingPointer.next;
  }
  //Delete by Value
  deleteByValue(value) {
    let currentValue = null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (!currentValue && currentNode.next) {
      if (currentNode.value === value) {
        currentValue = currentNode.value;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentValue) this.deleteByIndex(currentIndex);
  }
  //Prints the list of all the elements in the Linked List
  printList() {
    const elementsArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      elementsArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(elementsArray);
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
  //Helper

  //Traverse
  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i < index) {
      if (!currentNode.next) {
        return null;
      }
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.reverse();
myLinkedList.printList();
