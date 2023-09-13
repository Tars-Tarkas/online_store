import { get } from "./api_helper";
import * as url from "./url_helper";

export const getProducts = (limit: number) =>
  get(url.GET_PRODUCTS, { params: { limit } });
