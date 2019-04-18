import { combineReducers } from 'redux';

// Import feature reducers and state interfaces.
import { TodoState, todos } from './todos';
// import { TodoState, visibilityFilter } from './visibilityFilter';

// This interface represents app state by nesting feature states.
export interface RootState {
  todos: TodoState;
}

// Combine feature reducers into a single root reducer
export const rootReducer = combineReducers({
  todos
  // visibilityFilter
});
