import { Component, Prop } from "@stencil/core";
import { Todo } from '../../store/todos/types'
import { Action } from "@stencil/redux";

@Component({
  tag: "todo-item",
  styleUrl: "todo-item.css"
})
export class TodoList {
  @Prop() todo: Todo
  @Prop() toggleTodo: Action

  render() {
    return (
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
    );
  }
}
