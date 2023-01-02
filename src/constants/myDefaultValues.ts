import { Chef, Dish, Restaurant } from "./interfaces";

export const EmptyChef: Chef = {
  fname: "----",
  lname: "----",
  description: "noDesc",
  chefOfTheWeek: false,
  img: "noImg.png",
  name: "----",
  new: false,
  popular: false,
  restaurants: [],
};

export const EmptyDish: Dish = {
  categeory: "dinner",
  cusine: "noCusine",
  img: "noImg.png",
  ingrediants: "noIng",
  name: "----",
  price: 0,
  restaurantName: "noName",
  type:"noType"
};

export const EmptyRestaurant: Restaurant = {
  chef: [EmptyChef],
  chefName: "noName",
  established: "0000",
  img: "noImg.png",
  name: "----",
  new: false,
  popular: false,
  open: false,
  openH: "00:00",
  closeH: "00:00",
  rating: 0,
  signatureDish: [EmptyDish],
  dishes: [EmptyDish],
};
