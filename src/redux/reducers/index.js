import {combineReducers} from 'redux';
import generalReducer from './generalReducer';
import userReducer from './userReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  generalReducer,
  userReducer,
  contactReducer,
});
