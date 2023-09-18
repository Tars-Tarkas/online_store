import { put, call, takeLatest, all } from "redux-saga/effects";
import { getProductsSuccess, getProductsError } from "../actioin/actionCreator";
import { GET_PRODUCTS } from "../constants";

import { getProducts } from "../../helpers/backend_helper";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

function* onGetProducts({ payload: _limit }: any): any {
  try {
    yield delay(1);
    const response = yield call(getProducts, _limit);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsError(error.response));
  }
}

function* watchSaga() {
  yield takeLatest(GET_PRODUCTS, onGetProducts);
}

export default function* rootSaga() {
  yield all([call(watchSaga)]);
}
