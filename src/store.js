import { configureStore } from "@reduxjs/toolkit";
import restaurantsCategoryTabReducer from "./services/data/restaurants/restaurantsCategoryTabSlicer";
import restaurantsReducer from "./services/data/restaurants/restaurantsSlicer";
import chefsCategoryTabReducer from "./services/data/chefs/chefsCategoryTabSlicer";
import dishesCategoryTabReducer from "./services/data/dishes/dishesCategoryTabSlicer";
import currentDishOrderReducer from "./services/data/dishes/currentDishOrderSlicer";
import OrderReducer from "./services/data/dishes/orderSlicer";

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    restaurantsCategoryTab: restaurantsCategoryTabReducer,
    chefsCategoryTab: chefsCategoryTabReducer,
    dishesCategoryTab: dishesCategoryTabReducer,
    currentDishOrder: currentDishOrderReducer,
    order: OrderReducer,
  },
});