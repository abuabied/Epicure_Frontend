const triggerURL = "http://localhost:3001/api";

export const allAPI = `${triggerURL}/restautrants/getAllRestaurants`;
export const popularAPI =
  `${triggerURL}/restaurants/getPopularRestaurants`;
export const newAPI =
  `${triggerURL}/restaurants/getNewRestaurants`;
export const openAPI =
  `${triggerURL}/restaurants/getOpenRestaurants`;
export const byNameAPI = (restaurantName: String) => {
  return `${triggerURL}/restaurants/getRestaurantByName?name=${restaurantName}`;
};

export const getChefOfTheWeekAPI =
  `${triggerURL}/chefs/getChefofTheWeek`;
export const getAllChefsAPI = `${triggerURL}/chefs/getAllChefs`;
export const getPopularChefsAPI =
  `${triggerURL}/chefs/getPopularChefs`;
export const getNewChefsAPI = `${triggerURL}/chefs/getNewChefs`;

export const registerAPI = `${triggerURL}/auth/register`;
export const loginAPI = `${triggerURL}/auth/login`;