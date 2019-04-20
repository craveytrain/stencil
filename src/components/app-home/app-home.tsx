import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from "@stencil/redux";
import { Actions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { TodoState } from "../../store/todos/types";
import { toggleTodo } from "../../store/todos/actions";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop({ context: "store" }) store: Store<RootState, Actions>;
  @State() todos: TodoState;
  toggleTodo: Action

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const { todos } = state;

      return {
        todos
      }
    })

    this.store.mapDispatchToProps(this, { toggleTodo })
  }

  render() {
    return (
      <ion-content padding>
        <todo-list todos={this.todos} toggleTodo={this.toggleTodo} />
      </ion-content>
    )
  }
}
