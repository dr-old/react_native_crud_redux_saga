import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ButtonGradient, Divider} from '../../../components/atoms';
import {FormInput} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {useContact} from '../../../hooks/useContact';
import {types} from '../../../redux/actions/types';

function ContactForm({route}) {
  const {data, edit} = route.params;
  const {
    navigation,
    form,
    validate,
    create,
    update,
    onChangeText,
    setFormData,
    contacts,
  } = useContact();
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    if (contacts?.data?.message) {
      showMessage({
        message: 'Success',
        description: contacts?.data.message,
        type: 'success',
      });
      dispatch({type: types.CONTACT_RESET});
      navigation.goBack();
    }
    if (contacts?.error?.message) {
      showMessage({
        message: 'Error',
        description: contacts?.error.message,
        type: 'error',
      });
      dispatch({type: types.CONTACT_RESET});
      navigation.goBack();
    }
  }, [contacts]);

  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = () => {
    if (edit) {
      setFormData({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age.toString(),
        photo: data.photo,
      });
      setEditingTodo(data);
    }
  };

  const handleSave = () => {
    if (editingTodo) {
      update(data.id, form);
    } else {
      create(form);
    }
  };

  return (
    <Container
      bgColor={color.background3}
      loading={contacts?.loading}
      scrollview={false}
      navbar={{
        type: 'nofixed',
        title: `${editingTodo ? 'Edit' : 'Create'} Contact`,
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={20} />
      <View style={stylesCust.card}>
        <FormInput
          label="First Name"
          placeholder="Your first name"
          type="solid"
          solid={color.white}
          value={form?.firstName}
          onChangeText={value => onChangeText('firstName', value)}
        />
        <FormInput
          label="Last Name"
          placeholder="Your last name"
          type="solid"
          solid={color.white}
          value={form?.lastName}
          onChangeText={value => onChangeText('lastName', value)}
        />
        <FormInput
          label="Age"
          placeholder="Your age"
          type="solid"
          solid={color.white}
          value={form?.age}
          onChangeText={value => onChangeText('age', value)}
        />
        <FormInput
          label="Photo Url"
          placeholder="Your photo url"
          type="solid"
          solid={color.white}
          value={form?.photo}
          multiline={true}
          onChangeText={value => onChangeText('photo', value)}
        />
      </View>
      <View style={stylesCust.footer}>
        <ButtonGradient
          title="Save"
          disabled={!validate()}
          onClick={() => handleSave()}
        />
      </View>
    </Container>
  );
}

export default ContactForm;
