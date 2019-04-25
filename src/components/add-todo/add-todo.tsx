import { Component, Prop } from "@stencil/core";
import { Action } from "@stencil/redux";

@Component({
  tag: "add-todo"
})
export class AddTodo {
  @Prop() addTodo: Action;

  render() {
    return (
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button onClick={() => {
          this.addTodo('')
        }}>
          <ion-icon name="add" />
        </ion-fab-button>
      </ion-fab>
    );
  }
}
