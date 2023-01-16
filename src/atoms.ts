import { atom } from "recoil";

export const toDoState = atom({
  key: "test",
  default: ["a", "b", "c", "d", "e", "f"],
});
