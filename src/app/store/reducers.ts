import { combineReducers } from "@reduxjs/toolkit";
import persistStoresReducer from "./features/persistStoresSlice";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";

const rootReducer = combineReducers({
  persistStores: persistStoresReducer,
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
