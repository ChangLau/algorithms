// 栈
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  get peek() {
    return this.items[this.items.length - 1];
  }

  get isEmpty() {
    return !this.items.length;
  }

  get size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

let stack = new Stack();
