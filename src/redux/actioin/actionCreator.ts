import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_ERROR,
} from "../constants";

export const getProducts = (limit: any) => ({
  type: GET_PRODUCTS,
  payload: limit,
});

export const getProductsSuccess = (posts: any) => {
  return {
    type: GET_PRODUCTS_SUCCES,
    payload: posts,
  };
};
export const getProductsError = (error: boolean) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error,
  };
};
