interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}

// class 타입 제어자 접근 방법
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move() {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
