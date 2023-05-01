const triggerURL = "https://us-central1-epicure-server-1.cloudfunctions.net/app/api";

export const allAPI = `${triggerURL}/restautrants/getRestaurants`;
export const popularAPI =
  `${triggerURL}/restaurants/getPopularRestaurants`;
export const newAPI =
  `${triggerURL}//restaurants/getNewRestaurants`;
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