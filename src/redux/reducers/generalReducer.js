const initialState = {
  modalList: {
    id: '',
    status: false,
    detail: [],
  },
  userList: [],
  user: {
    tokenFirebase: null,
    token: null,
    data: {},
  },
  formRegister: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneId: '',
    phone: '',
  },
  formLogin: {
    email: '',
    password: '',
  },
  formContact: {
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  },
};

// eslint-disable-next-line no-undef
export default generalReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER MODALLIST
    case 'SET_MODAL_LIST':
      return {
        ...state,
        modalList: {
          ...state.modalList,
          id: action.id,
          status: action.status,
          detail: action.detail,
        },
      };

    // REDUCER TODO
    case 'SET_USER_AUTH':
      return {
        ...state,
        user: {
          ...state.user,
          [action.inputType]: action.inputValue,
        },
      };

    // REDUCER USER
    case 'SET_USER':
      return {
        ...state,
        user: {
          tokenFirebase: action.tokenFirebase,
          token: action.token,
          data: action.user,
        },
      };

    // REDUCER USER
    case 'SET_USER_CLEAN':
      return {
        ...state,
        user: {tokenFirebase: null, token: null, data: {}},
      };

    // REDUCER USER LIST
    case 'SET_USER_LIST':
      return {
        ...state,
        userList: action.userList,
      };

    //REDUCER FORM REGISTER
    case 'SET_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM REGISTER
    case 'CLEAN_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneId: '',
          phone: '',
        },
      };

    //REDUCER FORM LOGIN
    case 'SET_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM LOGIN
    case 'CLEAN_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          email: '',
          password: '',
        },
      };

    //REDUCER FORM CONTACT
    case 'SET_FORM_CONTACT':
      return {
        ...state,
        formContact: {
          ...state.formContact,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM CONTACT
    case 'CLEAN_FORM_CONTACT':
      return {
        ...state,
        formContact: {
          ...state.formContact,
          firstName: '',
          lastName: '',
          age: '',
          photo: '',
        },
      };

    //REDUCER FORM CONTACT
    case 'SETALL_FORM_CONTACT':
      return {
        ...state,
        formContact: {
          ...state.formContact,
          firstName: action.firstName,
          lastName: action.lastName,
          age: action.age,
          photo: action.photo,
        },
      };

    default:
      return state;
  }
};
