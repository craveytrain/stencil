import { addTodo, toggleTodo } from "./actions"
import { ADD_TODO, TOGGLE_TODO } from './types'



describe("addTodo", () => {
  it("adds todo", () => {
    const message = "message";
    const todo = addTodo(message);

    expect(todo.text).toBe(message);
    expect(todo.type).toBe(ADD_TODO);
  });
});

describe("toggleTodo", () => {
  it("toggles todo", () => {
    const id = "1";
    const todo = toggleTodo(id);

    expect(todo.id).toBe(id);
    expect(todo.type).toBe(TOGGLE_TODO);
  });
});
