import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux'

import { Actions } from '../../store/actions'
import { RootState } from '../../store/reducers'
import { store } from '../../store'

const defaultState = {
  todos: [
    {
      text: 'hi',
      id: '1',
      completed: true
    },
    {
      text: 'holas',
      id: '2',
      completed: false
    }
  ]
};

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Prop({ context: "store" }) store: Store<RootState, Actions>

  componentWillLoad() {
    this.store.setStore(store(defaultState))
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            component="app-home"
            componentProps={{ store: this.store }}
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
