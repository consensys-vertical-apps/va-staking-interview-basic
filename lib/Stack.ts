import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
  isEmpty() {
    return false;
  }

  size() {
    return 0
  }

  peek(): T {
    return undefined as any;
  }

  pop(): T {
    return undefined as any;
  }

  push(item: T) {
    return undefined as any;
  }

  search(item: T) {
    return undefined as any;
  }
}
