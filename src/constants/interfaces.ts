export interface Chef {
  fname: string;
  lname: string;
  name: string;
  img: string;
  description: String;
  restaurants: Restaurant[];
  popular: boolean;
  new: boolean;
  chefOfTheWeek: boolean;
}

export interface Dish {
  name: string;
  restaurantName: string;
  ingrediants: string;
  cusine: string;
  categeory: string;
  price: number;
  img: string;
  type: String;
}

export interface Restaurant {
  name: string;
  chefName: string;
  chef: Chef[];
  established: string;
  dishes: Dish[];
  rating: number;
  openH?: string;
  closeH?: string;
  img: string;
  new: boolean;
  popular: boolean;
  open: boolean;
  signatureDish: Dish[];
}