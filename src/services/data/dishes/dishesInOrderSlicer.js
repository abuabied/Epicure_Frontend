import { createSlice } from "@reduxjs/toolkit";

export const dishesInOrderSlice = createSlice({
  name: "dishesInOrder",
  initialState: {
    value: [],
    counter: 0,
  },
  reducers: {
    setOnGoingOrder: (state, action) => {
      state.value = action.payload;
      state.counter = action.payload.length;
    },
    addDishToOrder: (state, action) => {
      state.value.push(action.payload);
      state.counter = state.counter + 1;
    },
    removeDishFromOrder: (state, action) => {},
    EmptyOrder: (state, action) => {
      state.value = [];
      state.counter = 0;
    },
  },
});

export const { addDishToOrder, EmptyOrder, setOnGoingOrder } =
  dishesInOrderSlice.actions;

export default dishesInOrderSlice.reducer;
