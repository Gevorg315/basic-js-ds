
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list.
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
  let current = this.head;
  let resultHead = null;
  let resultTail = null;

  while (current !== null) {
    const node = {
      value: current.value,
      next: null
    };

    if (resultHead === null) {
      resultHead = node;
      resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = node;
    }

    current = current.next;
  }

  return resultHead;
}

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};

