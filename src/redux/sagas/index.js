import {spawn} from 'redux-saga/effects';
import userSaga from './userSaga';
import contactSaga from './contactSaga';

export default function* rootSaga() {
  yield spawn(userSaga);
  yield spawn(contactSaga);
}
