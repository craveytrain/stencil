import { combineReducers } from "redux"

// import feature reducers and state interfaces.
import { todos } from "./todos/reducers"

// Combine feature reducers into a single root reducer
export const rootReducer = combineReducers({
  todos
})

// This interface represents app state by nesting feature states.
export type RootState = ReturnType<typeof rootReducer>
