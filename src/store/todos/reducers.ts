import { v4 as uuid } from "uuid"
import { ADD_TODO, TOGGLE_TODO, TodoState, TodoActionTypes } from './types'

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
          completed: false
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

    default:
      return state
  }
}
