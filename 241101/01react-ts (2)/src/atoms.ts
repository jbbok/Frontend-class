import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: ["포폴 준비하기", "리액트 복습하기", "자바스크립트 공부하기"],
    Doing: ["노드JS공부하기"],
    Done: ["운동하기", "흑백요리사 시청하기"],
  },
});
