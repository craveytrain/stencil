// Import feature action interfaces
import { TodoActionTypes } from "./todos/types";
import { AnyAction } from 'redux'

// Export all feature actions for easier access.
export * from "./todos/actions";

// Combine feature action interfaces into a base type. Use union types to
// combine feature interfaces.
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
export type Actions = TodoActionTypes | AnyAction
