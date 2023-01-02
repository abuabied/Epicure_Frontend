export const allAPI = "http://localhost:3001/api/restautrants/getRestaurants";
export const popularAPI =
  "http://localhost:3001/api/restautrants/getPopularRestaurants";
export const newAPI =
  "http://localhost:3001/api/restautrants/getNewRestaurants";
export const openAPI =
  "http://localhost:3001/api/restautrants/getOpenRestaurants";
export const byNameAPI = (restaurantName: String) => {
  return `http://localhost:3001/api/restautrants/getRestaurantByName?name=${restaurantName}`;
};

export const getChefOfTheWeekAPI =
  "http://localhost:3001/api/chefs/getChefofTheWeek";
export const getAllChefsAPI = "http://localhost:3001/api/chefs/getAllChefs";
export const getPopularChefsAPI =
  "http://localhost:3001/api/chefs/getPopularChefs";
export const getNewChefsAPI = "http://localhost:3001/api/chefs/getNewChefs";
