import { createStore, combineReducers } from "redux";
import SetReducer from "./reducers/set";

const reducers = combineReducers({ set: SetReducer });

const store = createStore(reducers);
export default store;
