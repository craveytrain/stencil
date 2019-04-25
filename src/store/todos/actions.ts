import {ADD_TODO, TOGGLE_TODO, TodoActionTypes, SAVE_TODO, DELETE_TODO, ENABLE_TODO_EDIT } from './types';

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = (id: string): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id
})

export const saveTodo = (id: string, text: string): TodoActionTypes => ({
  type: SAVE_TODO,
  id,
  text
})

export const deleteTodo = (id: string): TodoActionTypes => ({
  type: DELETE_TODO,
  id
});

export const enableTodoEdit = (id: string): TodoActionTypes => ({
  type: ENABLE_TODO_EDIT,
  id
});
