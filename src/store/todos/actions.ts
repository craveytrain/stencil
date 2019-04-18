import {ADD_TODO, TOGGLE_TODO, TodoActionTypes } from './types';

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = (id: string): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id
})
