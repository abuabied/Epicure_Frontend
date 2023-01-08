export const allAPI = "http://localhost:3001/api/restaurants/getRestaurants";
export const popularAPI =
  "http://localhost:3001/api/restaurants/getPopularRestaurants";
export const newAPI =
  "http://localhost:3001/api/restaurants/getNewRestaurants";
export const openAPI =
  "http://localhost:3001/api/restaurants/getOpenRestaurants";
export const byNameAPI = (restaurantName: String) => {
  return `http://localhost:3001/api/restaurants/getRestaurantByName?name=${restaurantName}`;
};

export const getChefOfTheWeekAPI =
  "http://localhost:3001/api/chefs/getChefofTheWeek";
export const getAllChefsAPI = "http://localhost:3001/api/chefs/getAllChefs";
export const getPopularChefsAPI =
  "http://localhost:3001/api/chefs/getPopularChefs";
export const getNewChefsAPI = "http://localhost:3001/api/chefs/getNewChefs";

export const registerAPI = "http://localhost:3001/api/auth/register";
export const loginAPI = "http://localhost:3001/api/auth/login";