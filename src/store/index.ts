import { createStore } from 'redux'
import { rootReducer } from './reducers'
// import thunk from "redux-thunk"; // add-on you may want
// import logger from "redux-logger"; // add-on you may want

export const store = (preloadedState: any) => createStore(
  rootReducer,
  preloadedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
