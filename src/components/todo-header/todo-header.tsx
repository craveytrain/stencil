import { Component } from "@stencil/core";

@Component({
  tag: "todo-header"
})
export class TodoHeader {
  render() {
    return (
      <ion-header>
        <ion-toolbar>
          <ion-title>Todos</ion-title>
        </ion-toolbar>
      </ion-header>
    )
  }
}


