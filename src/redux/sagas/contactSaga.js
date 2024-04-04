import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {
  deleteApiFake,
  getApiFake,
  postApiFake,
  putApiFake,
} from '../apis/baseApi';

function* insert({payload}) {
  try {
    const response = yield call(postApiFake, payload);
    console.log('create', response);
    yield put({
      type: types.CONTACT_SUCCESS,
      payload: {data: response, message: 'Contact created successfull'},
    });
  } catch (error) {
    console.log('create error', error);
    yield put({
      type: types.CONTACT_FAILURE,
      payload: {message: response.error},
    });
  }
}

function* update({payload}) {
  try {
    const response = yield call(putApiFake, payload);
    console.log('update contact', response);
    yield put({
      type: types.CONTACT_SUCCESS,
      payload: {message: 'Contact update successfull!'},
    });
  } catch (error) {
    yield put({
      type: types.CONTACT_FAILURE,
      payload: {message: 'Contact update failure!'},
    });
  }
}

function* remove({payload}) {
  try {
    const response = yield call(deleteApiFake, payload);
    console.log('delete contact', response);
    yield put({
      type: types.CONTACT_SUCCESS,
      payload: {message: 'Contact delete successfull!'},
    });
  } catch (error) {
    yield put({
      type: types.CONTACT_FAILURE,
      payload: {message: 'Contact delete failure!'},
    });
  }
}

function* detail({payload}) {
  const response = yield call(getApiFake, payload);
  if (response?.data) {
    yield put({
      type: types.USER_SUCCESS,
      payload: {data: response.data, message: 'User is found'},
    });
    yield put({
      type: 'SETALL_FORM_EMPLOYEE',
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      job: response.data?.job ?? '',
    });
    console.log('details', response.data);
  } else {
    yield put({type: types.USER_FAILURE, payload: {message: response.error}});
  }
}

function* list({payload}) {
  try {
    const response = yield call(getApiFake, payload);
    yield put({
      type: types.FETCH_CONTACT_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    yield put({
      type: types.FETCH_CONTACT_SUCCESS,
      payload: {message: error?.message},
    });
  }
}

export default function* contactSaga() {
  yield takeLatest(types.INSERT_CONTACT, insert);
  yield takeLatest(types.UPDATE_CONTACT, update);
  yield takeLatest(types.DELETE_CONTACT, remove);
  yield takeLatest(types.GET_CONTACTS, list);
  yield takeLatest(types.GET_CONTACT, detail);
}
