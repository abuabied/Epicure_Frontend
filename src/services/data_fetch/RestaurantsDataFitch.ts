import { allAPI, byNameAPI, newAPI, openAPI, popularAPI } from "../../constants/fitchesAPIs";

export const getAllRestaurants = async () => {
  try {
    return await (await fetch(allAPI)).json();
  } catch (error) {}
};
export const getNewRestaurants = async () => {
  try {
    return await (await fetch(newAPI)).json();
  } catch (error) {}
};
export const getPopularRestaurants = async () => {
  try {
    return await (await fetch(popularAPI)).json();
  } catch (error) {}
};
export const getOpenRestaurants = async () => {
  try {
    return await (await fetch(openAPI)).json();
  } catch (error) {}
};
export const getRestaurantByName = async (restaurantName: String) => {
  try {
    return await (await fetch(byNameAPI)).json();
  } catch (error) {}
};
