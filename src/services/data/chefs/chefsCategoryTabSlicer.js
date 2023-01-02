import { createSlice } from "@reduxjs/toolkit";

export const chefsCategoryTabSlice = createSlice({
  name: "chefsCategoryTab",
  initialState: {
    value: "all",
  },
  reducers: {
    setChefsCategoryTab: (state, action) => {
      state.value = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { setChefsCategoryTab } = chefsCategoryTabSlice.actions;

export default chefsCategoryTabSlice.reducer;
