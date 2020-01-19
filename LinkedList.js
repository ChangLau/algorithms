// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // 任意位置插入元素
  insert(postion, element) {
    if (postion >= 0 && postion <= this.length) {
      const node = new Node(element);
      let current = this.head,
        previous = null,
        index = 0;
      if (postion === 0) {
        this.head = node;
        this.head.next = current;
      } else {
        while (index++ < postion) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }

  // 移除指定位置元素
  removeAt(position) {
    if (position > -1 && postion < this.length) {
      let current = this.head,
        previous = null,
        index = 0;
      if (postion === 0) {
        this.head = current.next;
      } else {
        while (index++ < postion) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  findIndex(element) {
    let current = this.head,
      index = -1;
    while (current) {
      if (element == current.element) {
        return index + 1;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    return this.removeAt(this.findIndex(element));
  }

  isEmpty() {
    return !this.length;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head,
      string = "";
    while (current) {
      string += `${current.element}`;
      current = current.next;
    }
    return string;
  }
}

const linkedList = new LinkedList();

console.log(linkedList);
linkedList.append(2);
linkedList.append(6);
linkedList.append(24);
linkedList.append(152);

linkedList.insert(3, 18);
console.log(linkedList);
console.log(linkedList.findIndex(24));
