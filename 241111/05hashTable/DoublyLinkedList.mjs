class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    // ★ 연결리스트는 항상 머리가 있어야함!
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    // 현재 노드를 head부터 시작
    let currentNode = this.head;
    let text = "[";
    // 현재 노드가 null이 될 때까지(리스트의 끝까지) 반복
    // 계속 붙여나감
    while (currentNode !== null) {
      text += currentNode.data;
      // 현재 노드의 데이터를 출력
      console.log(currentNode.data);
      // 다음 노드로 이동
      currentNode = currentNode.next;
      // 마지막 노드가 아니면 콤마 붙임
      if (currentNode !== null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }
  clear() {
    this.head = null;
    this.count = 0;
  }

  // index 안의 특정값을 찍어서 난 여기에 값을 넣겠다!
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다!");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      //새로 만든 애한테 head를 주고 기존 head를 뒤로 밀어버림! head 교체!
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      // head의 역할을 하는 애를 newNode에 넣겠다
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다!");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deletedNode = this.head;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deletedNode;
    } else if (index === this.count - 1) {
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    // 어차피 마지막이라 index 필요없음
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, DoublyLinkedList };
