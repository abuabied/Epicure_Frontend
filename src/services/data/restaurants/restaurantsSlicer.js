import { createSlice } from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: [],
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { setRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
