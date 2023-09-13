import { PayloadAction } from "@reduxjs/toolkit";

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_ERROR,
} from "../constants";

const initialState = {
  OSJson: [],
  loading: false,
  error: false,
  totalPage: 0,
  limit: 10,
};

const OSReducer = (
  state = initialState,
  { type, payload }: PayloadAction<any>
) => {
  switch (type) {
    case GET_PRODUCTS:
      state = { ...state, loading: true };
      break;
    case GET_PRODUCTS_SUCCES:
      state = { ...state, OSJson: payload, loading: false };
      break;
    case GET_PRODUCTS_ERROR:
      state = {
        ...state,
        error: true,
        loading: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default OSReducer;
