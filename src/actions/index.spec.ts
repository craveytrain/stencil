import { addTodo, toggleTodo, Types } from './index'

const id = 1

jest.mock('uuid', () => ({
  v4: jest.fn(() => id)
}))

describe('addTodo', () => {
  it('adds todo', () => {
    const message = 'message'
    const todo = addTodo(message)

    expect(todo.text).toBe(message)
    expect(todo.id).toBe(id)
    expect(todo.type).toBe(Types.ADD_TODO)
  })
})

describe('toggleTodo', () => {
  it('toggles todo', () => {
    const todo = toggleTodo(id)

    expect(todo.id).toBe(id)
    expect(todo.type).toBe(Types.TOGGLE_TODO)
  })
})
