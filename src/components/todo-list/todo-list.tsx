import { Component, Prop } from '@stencil/core'
import { TodoState } from '../../store/todos/types'
import { Action } from '@stencil/redux';

@Component({
  tag: "todo-list"
})
export class TodoList {
  @Prop() todos: TodoState
  @Prop() toggleTodo: Action

  render() {
    return (
      <ion-list>
        {this.todos.map(todo => <todo-item todo={todo} toggleTodo={this.toggleTodo} />)}
      </ion-list>
    )
  }
}
