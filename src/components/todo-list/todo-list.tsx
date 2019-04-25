import { Component, Prop } from '@stencil/core'
import { TodoState } from '../../store/todos/types'
import { Action } from '@stencil/redux'

@Component({
  tag: "todo-list"
})
export class TodoList {
  @Prop() todos: TodoState
  @Prop() toggleTodo: Action
  @Prop() addTodo: Action
  @Prop() saveTodo: Action
  @Prop() enableTodoEdit: Action
  @Prop() deleteTodo: Action

  render() {
    return (
      <ion-list>
        {this.todos.map(todo => {
          if (todo.editable) {
            return <edit-todo todo={todo} saveTodo={this.saveTodo} deleteTodo={this.deleteTodo} />
          }

          return <todo-item todo={todo} toggleTodo={this.toggleTodo} enableTodoEdit={this.enableTodoEdit} />
        }
        )}
      </ion-list>
    );
  }
}
