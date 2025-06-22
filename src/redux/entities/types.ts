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
  text: string;
  rating: number;
  id?: string;
};

export type ReviewAddDto = {
  userId: string;
  text: string;
  rating: number;
};

export type ReviewDto = {
  userId: string;
  text: string;
  id: string;
  rating: number;
};

export type User = {
  id: string;
  name: string;
};
