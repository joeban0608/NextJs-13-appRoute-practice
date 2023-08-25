import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PersisStatusState {
  counter: number;
}

const initialState: PersisStatusState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
