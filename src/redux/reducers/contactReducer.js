import {types} from '../actions/types';

const initialState = {
  loading: false,
  data: {},
  error: {},
  contact: {},
  contacts: [],
};

// eslint-disable-next-line no-undef
export default contactReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.INSERT_CONTACT:
    case types.UPDATE_CONTACT:
    case types.DELETE_CONTACT:
    case types.GET_CONTACT:
    case types.GET_CONTACTS:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };

    case types.CONTACT_SUCCESS:
      return {
        ...state,
        data: payload,
        error: {},
        loading: false,
      };
    case types.CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: payload,
      };
    case types.CONTACT_RESET:
      return {
        ...state,
        loading: false,
        data: {},
        error: {},
      };

    default:
      return state;
  }
};
