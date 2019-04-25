import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from "@stencil/redux";
import { Actions } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { TodoState } from "../../store/todos/types";
import { toggleTodo, addTodo, saveTodo, deleteTodo, enableTodoEdit } from "../../store/todos/actions";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop({ context: "store" }) store: Store<RootState, Actions>
  @State() todos: TodoState
  toggleTodo: Action
  addTodo: Action
  saveTodo: Action
  deleteTodo: Action
  enableTodoEdit: Action

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const { todos } = state;

      return {
        todos
      }
    })

    this.store.mapDispatchToProps(this, {
      toggleTodo,
      addTodo,
      saveTodo,
      deleteTodo,
      enableTodoEdit
    })
  }

  render() {
    return [
      <todo-header />,
      <todo-list todos={this.todos}
        toggleTodo={this.toggleTodo}
        saveTodo={this.saveTodo}
        deleteTodo={this.deleteTodo}
        enableTodoEdit={this.enableTodoEdit}
      />,
      <add-todo addTodo={this.addTodo} />
    ];
  }
}
