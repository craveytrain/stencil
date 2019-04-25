import { ADD_TODO, TOGGLE_TODO, TodoState, TodoActionTypes, SAVE_TODO, DELETE_TODO, ENABLE_TODO_EDIT } from './types'

let id = 0;

const uuid = () => (id++).toString()

const initialState: TodoState = []

export const todos = (state = initialState, action?: TodoActionTypes): TodoState => {
  // if no or improper action, just return state
  if (!action || !action.type) {
    return state
  }

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          editable: true
        }
      ]

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })

    case SAVE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text,
            editable: false
          }
        }

        return todo
      })

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case ENABLE_TODO_EDIT:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editable: true
          }
        }

        return todo
      })

    default:
      return state
  }
}
