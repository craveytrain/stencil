/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';
import {
  Action,
} from '@stencil/redux';
import {
  Todo,
  TodoState,
} from './store/todos/types';


export namespace Components {

  interface AddTodo {
    'addTodo': Action;
  }
  interface AddTodoAttributes extends StencilHTMLAttributes {
    'addTodo'?: Action;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface EditTodo {
    'deleteTodo': Action;
    'saveTodo': Action;
    'todo': Todo;
  }
  interface EditTodoAttributes extends StencilHTMLAttributes {
    'deleteTodo'?: Action;
    'saveTodo'?: Action;
    'todo'?: Todo;
  }

  interface TodoHeader {}
  interface TodoHeaderAttributes extends StencilHTMLAttributes {}

  interface TodoItem {
    'enableTodoEdit': Action;
    'todo': Todo;
    'toggleTodo': Action;
  }
  interface TodoItemAttributes extends StencilHTMLAttributes {
    'enableTodoEdit'?: Action;
    'todo'?: Todo;
    'toggleTodo'?: Action;
  }

  interface TodoList {
    'addTodo': Action;
    'deleteTodo': Action;
    'enableTodoEdit': Action;
    'saveTodo': Action;
    'todos': TodoState;
    'toggleTodo': Action;
  }
  interface TodoListAttributes extends StencilHTMLAttributes {
    'addTodo'?: Action;
    'deleteTodo'?: Action;
    'enableTodoEdit'?: Action;
    'saveTodo'?: Action;
    'todos'?: TodoState;
    'toggleTodo'?: Action;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AddTodo': Components.AddTodo;
    'AppHome': Components.AppHome;
    'AppRoot': Components.AppRoot;
    'EditTodo': Components.EditTodo;
    'TodoHeader': Components.TodoHeader;
    'TodoItem': Components.TodoItem;
    'TodoList': Components.TodoList;
  }

  interface StencilIntrinsicElements {
    'add-todo': Components.AddTodoAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-root': Components.AppRootAttributes;
    'edit-todo': Components.EditTodoAttributes;
    'todo-header': Components.TodoHeaderAttributes;
    'todo-item': Components.TodoItemAttributes;
    'todo-list': Components.TodoListAttributes;
  }


  interface HTMLAddTodoElement extends Components.AddTodo, HTMLStencilElement {}
  var HTMLAddTodoElement: {
    prototype: HTMLAddTodoElement;
    new (): HTMLAddTodoElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLEditTodoElement extends Components.EditTodo, HTMLStencilElement {}
  var HTMLEditTodoElement: {
    prototype: HTMLEditTodoElement;
    new (): HTMLEditTodoElement;
  };

  interface HTMLTodoHeaderElement extends Components.TodoHeader, HTMLStencilElement {}
  var HTMLTodoHeaderElement: {
    prototype: HTMLTodoHeaderElement;
    new (): HTMLTodoHeaderElement;
  };

  interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {}
  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };

  interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {}
  var HTMLTodoListElement: {
    prototype: HTMLTodoListElement;
    new (): HTMLTodoListElement;
  };

  interface HTMLElementTagNameMap {
    'add-todo': HTMLAddTodoElement
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
    'edit-todo': HTMLEditTodoElement
    'todo-header': HTMLTodoHeaderElement
    'todo-item': HTMLTodoItemElement
    'todo-list': HTMLTodoListElement
  }

  interface ElementTagNameMap {
    'add-todo': HTMLAddTodoElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'edit-todo': HTMLEditTodoElement;
    'todo-header': HTMLTodoHeaderElement;
    'todo-item': HTMLTodoItemElement;
    'todo-list': HTMLTodoListElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
