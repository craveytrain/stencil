import { Component, Prop } from "@stencil/core"
import { Todo } from '../../store/todos/types'
import { Action } from "@stencil/redux"

@Component({
  tag: "todo-item",
  styleUrl: "todo-item.css"
})
export class TodoList {
  @Prop() todo: Todo
  @Prop() toggleTodo: Action
  @Prop() enableTodoEdit: Action

  render() {
    return (
      <ion-item-sliding>
        <ion-item
          class={{ completed: this.todo.completed, ["todo-item"]: true }}
        >
          <ion-checkbox
            slot="start"
            checked={this.todo.completed}
            onIonChange={() => {
              this.toggleTodo(this.todo.id)
            }}
          />
          <item-label>{this.todo.text}</item-label>
        </ion-item>
        <ion-item-options>
          <ion-item-option color="primary" onClick={() => {
            this.enableTodoEdit(this.todo.id)
          }}>
            edit
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    )
  }
}
