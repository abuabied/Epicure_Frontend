import {
  allAPI,
  byNameAPI,
  newAPI,
  openAPI,
  popularAPI,
} from "../../constants/fetchesAPIs";

export const getAllRestaurants = async () => {
  try {
    return await (await fetch(allAPI)).json();
  } catch (error) {
    return [];
  }
};
export const getNewRestaurants = async () => {
  try {
    return await (await fetch(newAPI)).json();
  } catch (error) {
    return [];
  }
};
export const getPopularRestaurants = async () => {
  try {
    return await (await fetch(popularAPI)).json();
  } catch (error) {
    return [];
  }
};
export const getOpenRestaurants = async () => {
  try {
    return await (await fetch(openAPI)).json();
  } catch (error) {
    return [];
  }
};
export const getRestaurantByName = async (restaurantName: String) => {
  try {
    return await (await fetch(byNameAPI(restaurantName))).json();
  } catch (error) {
    return [];
  }
};
