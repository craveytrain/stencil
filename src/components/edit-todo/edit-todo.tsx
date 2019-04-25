import { Component, Prop } from "@stencil/core"
import { Action } from "@stencil/redux"
import { Todo } from "../../store/todos/types"

@Component({
  tag: "edit-todo"
})
export class EditTodo {
  @Prop() todo: Todo
  @Prop() saveTodo: Action
  @Prop() deleteTodo: Action

  onBlur(evt) {
    if (!evt.srcElement.value) {
      return this.deleteTodo(this.todo.id)
    }

    this.saveTodo(this.todo.id, evt.srcElement.value)
  }

  render() {
    return (
      <ion-item>
        <ion-input
          placeholder="Something awesome"
          value={this.todo.text}
          autofocus={true}
          onIonBlur={evt => this.onBlur(evt)}
        />
      </ion-item>
    )
  }
}
