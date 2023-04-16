const triggerURL = "https://us-central1-epicure-server-1.cloudfunctions.net/app";
export const allAPI = `${triggerURL}/api/restautrants/getRestaurants`;
export const popularAPI = `${triggerURL}/api/restautrants/getPopularRestaurants`;
export const newAPI = `${triggerURL}/api/restautrants/getNewRestaurants`;
export const openAPI = `${triggerURL}/api/restautrants/getOpenRestaurants`;
export const byNameAPI = (restaurantName: String) => {
  return `${triggerURL}/api/restautrants/getRestaurantByName?name=${restaurantName}`;
};
export const getChefOfTheWeekAPI = `${triggerURL}/api/chefs/getChefofTheWeek`;
export const getAllChefsAPI = `${triggerURL}/api/chefs/getAllChefs`;
export const getPopularChefsAPI = `${triggerURL}/api/chefs/getPopularChefs`;
export const getNewChefsAPI = `${triggerURL}/api/chefs/getNewChefs`;

export const registerAPI = `${triggerURL}/api/auth/register`;
export const loginAPI = `${triggerURL}/api/auth/login`;