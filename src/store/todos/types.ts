export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SAVE_TODO = 'SAVE_TODO'
export const DELETE_TODO = "DELETE_TODO";
export const ENABLE_TODO_EDIT = 'ENABLE_TODO_EDIT'

export interface Todo {
  id: string
  text: string
  completed: boolean
  editable: boolean
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

interface SaveTodoAction {
  type: typeof SAVE_TODO
  id: string
  text: string
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  id: string
}

interface EnableTodoEditAction {
  type: typeof ENABLE_TODO_EDIT
  id: string
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | SaveTodoAction
  | DeleteTodoAction
  | EnableTodoEditAction
