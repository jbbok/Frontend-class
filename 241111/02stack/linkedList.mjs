class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    // 얘네는 개별 아이템임!
  }
}

// export { Node };

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;
// // node3 이 마지막 값!

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

class LinkedList {
  constructor() {
    this.head = null;
    // ★ 연결리스트는 항상 머리가 있어야함!
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

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다!");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      //새로 만든 애한테 head를 주고 기존 head를 뒤로 밀어버림! head 교체!
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
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
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  deleteLatst() {
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

export { Node, LinkedList };
