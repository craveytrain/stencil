import { todos } from "./reducers"
import { ADD_TODO, TodoActionTypes, TodoState, TOGGLE_TODO } from './types'

describe("todos reducer", () => {
  it("should handle no message", () => {
    expect(todos(undefined)).toEqual([]);
  })

  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  })

  it("should handle ADD_TODO with empty state", () => {
    const addTodoAction: TodoActionTypes = {
      type: ADD_TODO,
      text: 'Run the tests'
    }

    const newState = todos([], addTodoAction);

    expect(newState[0].text).toBe(addTodoAction.text)
    expect(newState[0].completed).toBeFalsy()
    expect(newState[0].id).toBeDefined()
  })

  it('should handle ADD_TODO with existing state', () => {
    const existingState: TodoState = [
      {
        text: "Run the tests",
        completed: false,
        id: '0'
      }
    ]

    const addTodoAction: TodoActionTypes = {
      type: ADD_TODO,
      text: 'Use Redux'
    }

    const newState = todos(existingState, addTodoAction)

    expect(newState[0]).toEqual(existingState[0]);
    expect(newState[1].text).toBe(addTodoAction.text)
    expect(newState[1].completed).toBeFalsy()
    expect(newState[1].id).toBeDefined()
  })

  it("should handle TOGGLE_TODO", () => {
    const existingState: TodoState = [
      {
        text: "Run the tests",
        completed: false,
        id: '1'
      },
      {
        text: "Use Redux",
        completed: false,
        id: '0'
      }
    ]

    const toggleTodoAction: TodoActionTypes = {
      type: TOGGLE_TODO,
      id: '1'
    }

    const newState = todos(existingState, toggleTodoAction)

    expect(newState[1]).toEqual(existingState[1])
    expect(newState[0].text).toBe(existingState[0].text)
    expect(newState[0].id).toBe(existingState[0].id)
    expect(newState[0].completed).toBeTruthy()
  });
});
