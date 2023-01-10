import { createSlice } from "@reduxjs/toolkit";

export const dishesInOrderSlice = createSlice({
  name: "dishesInOrder",
  initialState: {
    value: [],
    counter: 0,
    restaurantName: "",
  },
  reducers: {
    setDishesInOrder: (state, action) => {
      state.value = action.payload;
      state.counter = action.payload.length;
    },
    EmptyOrder: (state, action) => {
      state.value = [];
      state.counter = 0;
      state.restaurantName = "";
    },
    setRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
  },
});

export const {
  setDishesInOrder,
  EmptyOrder,
  setRestaurantName,
} = dishesInOrderSlice.actions;

export default dishesInOrderSlice.reducer;
