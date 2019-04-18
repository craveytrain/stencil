import { v4 as uuid } from 'uuid'

export enum Types {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export const addTodo = text => ({
  type: Types.ADD_TODO,
  id: uuid(),
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: Types.TOGGLE_TODO,
  id
})

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}
