import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeColor = "dark" | "light" | "";
export interface PersisStatusState {
  selectTheme: ThemeColor;
}

const initialState: PersisStatusState = {
  selectTheme: "dark",
};

export const persistStoresSlice = createSlice({
  name: "persistStores",
  initialState,
  reducers: {
    setSelectTheme: (state, action: PayloadAction<ThemeColor>) => {
      state.selectTheme = action.payload;
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
export const { setSelectTheme } = persistStoresSlice.actions;

export default persistStoresSlice.reducer;
