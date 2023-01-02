import { createSlice } from "@reduxjs/toolkit";

export const dishesCategoryTabSlice = createSlice({
  name: "dishesCategoryTab",
  initialState: {
    value: "breakfast",
  },
  reducers: {
    setDishesCategoryTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDishesCategoryTab } =
  dishesCategoryTabSlice.actions;

export default dishesCategoryTabSlice.reducer;
