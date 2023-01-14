import { createSlice } from "@reduxjs/toolkit";
import { EmptyDish } from "../../../constants/myDefaultValues";

export const currentDishOrderSlice = createSlice({
  name: "currentDishOrder",
  initialState: {
    value: { dish: EmptyDish, sides: "Bread", changes: [], quantity: 1 },
  },
  reducers: {
    setCurrentDishOrder: (state, action) => {
      state.value.dish = action.payload;
    },
    setCurrentDishSides: (state, action) => {
      state.value.sides = action.payload;
    },
    setCurrentDishChanges: (state, action) => {
      const lengthBefore = state.value.changes.length;
      state.value.changes = state.value.changes.filter((change) => {
        return change !== action.payload;
      });
      if (lengthBefore === state.value.changes.length)
        state.value.changes.push(action.payload);
    },
    setCurrentDishQuantity: (state, action) => {
      state.value.quantity = action.payload;
    },
    resetCurrentDish: (state) => {
      state.value.dish = EmptyDish;
      state.value.sides = "Bread";
      state.value.changes = [];
      state.value.quantity = 1;
    },
  },
});

export const {
  setCurrentDishOrder,
  setCurrentDishSides,
  setCurrentDishChanges,
  resetCurrentDish,
  setCurrentDishQuantity,
} = currentDishOrderSlice.actions;

export default currentDishOrderSlice.reducer;
