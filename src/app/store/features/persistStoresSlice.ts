import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PersisStatusState {
  counter: number;
}

const initialState: PersisStatusState = {
  counter: 0,
};

export const persistStoresSlice = createSlice({
  name: "persistStores",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },

    // decrement: (state) => {
    //   state.counter = 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.counter = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = persistStoresSlice.actions;

export default persistStoresSlice.reducer;
