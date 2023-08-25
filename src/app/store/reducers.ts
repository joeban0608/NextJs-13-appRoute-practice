import { combineReducers } from "@reduxjs/toolkit";
import persistStoresReducer from "./features/persistStoresSlice";
import counterReducer from "./features/counterSlice";

const rootReducer = combineReducers({
  persistStores: persistStoresReducer,
  counter: counterReducer,
});

export default rootReducer;
