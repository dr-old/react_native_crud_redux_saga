import {types} from './types';

export function listUserData(data) {
  return {
    type: types.GET_LIST_USER,
    payload: data,
  };
}

export const detailUserData = data => ({
  type: types.GET_DETAIL_USER,
  payload: data,
});

export const updateListUserData = users => ({
  type: types.UPDATE_LIST_USER,
  payload: users,
});

export function deleteUserData(data) {
  return {
    type: types.DELETE_USER,
    payload: data,
  };
}

export function insertUserData(data) {
  return {
    type: types.INSERT_USER,
    payload: data,
  };
}

export function updateUserData(data) {
  return {
    type: types.UPDATE_USER,
    payload: data,
  };
}

export const updateDetailUserData = users => ({
  type: types.UPDATE_DETAIL_USER,
  payload: users,
});

export function loginUserData(data) {
  return {
    type: types.GET_LOGIN,
    payload: data,
  };
}
