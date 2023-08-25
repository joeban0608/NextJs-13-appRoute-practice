import { combineReducers } from "@reduxjs/toolkit";
import persistStoresReducer from "./features/persistStoresSlice";

const rootReducer = combineReducers({
  persistStores: persistStoresReducer,
});

export default rootReducer;
