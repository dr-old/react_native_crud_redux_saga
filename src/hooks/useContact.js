// useFetchUsers.js
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteContactData,
  insertContactData,
  listContactData,
  updateContactData,
} from '../redux/actions/contactAction';
import {useNavigation} from '@react-navigation/native';

export const useContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer);
  // const form = useSelector(state => state.generalReducer.formContact);
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [form, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const loadMore = () => {
    if (!contacts.loading) {
      // setPage(page + 1);
      console.log('loadmore');
    }
  };

  const reload = () => {
    // setPage(1);
    const payload = {
      link: 'contact',
      // data: {
      //   page,
      // },
    };
    console.log('reload');
    dispatch(listContactData(payload));
  };

  const deleted = id => {
    const payload = {
      link: 'contact/' + id,
    };
    dispatch(deleteContactData(payload));
  };

  const update = id => {
    const payload = {
      link: 'contact/' + id,
      data: {...form, age: parseInt(form.age)},
    };
    console.log('update', payload);
    dispatch(updateContactData(payload));
  };

  const create = () => {
    const payload = {
      link: 'contact',
      data: {...form, age: parseInt(form.age)},
    };
    console.log('create', payload);
    dispatch(insertContactData(payload));
  };

  const onChangeText = (type, value) => {
    setFormData({
      ...form,
      [type]: value,
    });
  };

  const validate = () => {
    if (form?.firstName && form?.lastName && form?.age && form?.photo) {
      return true;
    } else {
      return false;
    }
  };

  return {
    contacts,
    reload,
    loadMore,
    deleted,
    update,
    create,
    form,
    onChangeText,
    setFormData,
    validate,
    navigation,
  };
};
