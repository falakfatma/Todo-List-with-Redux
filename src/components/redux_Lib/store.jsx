import { applyMiddleware,createStore } from "redux"
import { createLogger } from "redux-logger"
import { AddTodos } from "./reducers"
export const store = createStore(AddTodos, applyMiddleware(createLogger()))