export interface IStack<T> {
  size(): Number;
  isEmpty(): Boolean;
  peek(): T;
  pop(): T;
  push(item: T): T;
  search(item: T): T;
}
