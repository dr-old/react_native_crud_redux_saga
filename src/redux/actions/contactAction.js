import {types} from './types';

export function listContactData(data) {
  return {
    type: types.GET_CONTACTS,
    payload: data,
  };
}

export const detailContactData = data => ({
  type: types.GET_CONTACT,
  payload: data,
});

export function deleteContactData(data) {
  return {
    type: types.DELETE_CONTACT,
    payload: data,
  };
}

export function insertContactData(data) {
  return {
    type: types.INSERT_CONTACT,
    payload: data,
  };
}

export function updateContactData(data) {
  return {
    type: types.UPDATE_CONTACT,
    payload: data,
  };
}
