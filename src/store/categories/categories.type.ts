export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_MAP = "categories/SET_CATEGORIES_MAP",
  SET_CATEGORIES = "categories/SET_CATEGORIES",
  FETCH_CATEGORIES_START = "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "categories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "categories/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoriesMap = {
  [key: string]: CategoryItem[];
};
