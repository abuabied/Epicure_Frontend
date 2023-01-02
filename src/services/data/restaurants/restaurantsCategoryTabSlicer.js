import { createSlice } from "@reduxjs/toolkit";

export const restaurantsCategoryTabSlice = createSlice({
  name: "restaurantsCategoryTab",
  initialState: {
    value: "all",
  },
  reducers: {
    setRestaurantsCategoryTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurantsCategoryTab } = restaurantsCategoryTabSlice.actions;

export default restaurantsCategoryTabSlice.reducer;
