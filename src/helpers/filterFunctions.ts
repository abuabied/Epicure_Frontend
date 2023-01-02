import { Dish } from "../constants/interfaces";

export const filterDishesByCategory = (dishes: Dish[], category: String) => {
  return dishes.filter((dish: Dish) => {
    return dish.categeory === category;
  });
};
