import { configureStore } from "@reduxjs/toolkit";
import restaurantsCategoryTabReducer from "./services/data/restaurants/restaurantsCategoryTabSlicer";
import restaurantsReducer from "./services/data/restaurants/restaurantsSlicer";
import chefsCategoryTabReducer from "./services/data/chefs/chefsCategoryTabSlicer";
import dishesCategoryTabReducer from "./services/data/dishes/dishesCategoryTabSlicer";


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    restaurantsCategoryTab: restaurantsCategoryTabReducer,
    chefsCategoryTab: chefsCategoryTabReducer,
    dishesCategoryTab: dishesCategoryTabReducer,
  },
});