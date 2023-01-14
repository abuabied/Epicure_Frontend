import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    dishes: [],
    counter: 0,
    restaurantName: "",
    overallPrice: 0,
  },
  reducers: {
    setDishesInOrder: (state, action) => {
      state.dishes = action.payload;
      state.counter = action.payload.length;
      state.overallPrice = 0;
      action.payload.forEach((element) => {
        state.overallPrice = state.overallPrice + element.finalPrice;
      });
    },
    EmptyOrder: (state) => {
      state.dishes = [];
      state.counter = 0;
      state.overallPrice = 0;
      state.restaurantName = "";
    },
    setRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
  },
});

export const { setDishesInOrder, EmptyOrder, setRestaurantName } =
  orderSlice.actions;

export default orderSlice.reducer;
