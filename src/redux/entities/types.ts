export type Restaurant = {
  name: string;
  id: string;
  menu: string[];
  reviews: string[];
};

export type Dish = {
  name: string;
  id: string;
  price: number;
  ingredients: string[];
};

export type Review = {
  userId: string;
  text: string;
  id: string;
  rating: number;
};

export type User = {
  id: string;
  name: string;
};
