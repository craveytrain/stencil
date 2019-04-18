export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoState = Todo[]

interface AddTodoAction {
  type: typeof ADD_TODO
  text: string
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  id: string
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction
