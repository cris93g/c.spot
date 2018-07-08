import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import electronicsReducer from "./ducks/electronicsReducer";

const middleware = applyMiddleware(promiseMiddleware());
const store = createStore(electronicsReducer, middleware);

export default store;
