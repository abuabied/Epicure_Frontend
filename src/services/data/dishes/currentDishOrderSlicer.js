import { createSlice } from "@reduxjs/toolkit";
import { EmptyDish } from "../../../constants/myDefaultValues";

export const currentDishOrderSlice = createSlice({
  name: "currentDishOrder",
  initialState: {
    value: EmptyDish,
  },
  reducers: {
    setCurrentDishOrder: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentDishOrder } = currentDishOrderSlice.actions;

export default currentDishOrderSlice.reducer;