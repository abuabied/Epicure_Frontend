import {
  getAllChefsAPI,
  getChefOfTheWeekAPI,
  getNewChefsAPI,
  getPopularChefsAPI,
} from "../../constants/fetchesAPIs";

export const getChefOfTheWeek = async () => {
  try {
    return await (await fetch(getChefOfTheWeekAPI)).json();
  } catch (error) {
    return [];
  }
};

export const getAllChefs = async () => {
  try {
    return await (await fetch(getAllChefsAPI)).json();
  } catch (error) {
    return [];
  }
};

export const getNewChefs = async () => {
  try {
    return await (await fetch(getNewChefsAPI)).json();
  } catch (error) {
    return [];
  }
};

export const getPopularChefs = async () => {
  try {
    return await (await fetch(getPopularChefsAPI)).json();
  } catch (error) {
    return [];
  }
};
