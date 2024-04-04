import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ButtonLabelIcon, Divider} from '../../../components/atoms';
import {color, styles} from '../../../utils/styles';
import {Container, ModalAlert} from '../../organism';
import stylesCust from './stylesCust';
import {helpers} from '../../../utils';
import Feather from 'react-native-vector-icons/Feather';
import {useContact} from '../../../hooks/useContact';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {types} from '../../../redux/actions/types';

function ContactDetail({route}) {
  const {deleted, navigation, contacts} = useContact();
  const {data} = route.params;
  const dispatch = useDispatch();
  const [imageExists, setImageExists] = useState(true);
  const [modalAlert, setModalAlert] = useState({status: false, detail: {}});
  const openModal = (message, submit) => {
    setModalAlert({
      status: true,
      message: message,
      onSubmit: submit,
      onCancel: () => closeModal(),
    });
  };

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

  const closeModal = () => {
    setModalAlert({status: false});
  };

  const handleEdit = () => {
    navigation.push('ContactForm', {data, edit: true});
  };

  const handleImageError = () => {
    setImageExists(false);
  };

  return (
    <>
      <Container
        bgColor={color.white9}
        navbar={{
          type: 'fixed',
          title: 'Detail',
          onClick: () => navigation.goBack(),
        }}>
        <View style={stylesCust.detail}>
          {imageExists && helpers.isHttpUrl(data.photo) ? (
            <Image
              source={{uri: data.photo}}
              style={stylesCust.image}
              onError={handleImageError}
            />
          ) : (
            <View style={stylesCust.imageIcon}>
              <Feather name={'user'} size={50} color={color.white} />
            </View>
          )}
          <Divider height={20} />
          <Text style={styles.h3()}>
            {`${data.firstName} ${data.lastName}`}
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.textDefault(), {textAlign: 'center'}]}>
            {data.age} years old
          </Text>
        </View>
      </Container>
      <View style={stylesCust.footer}>
        <ButtonLabelIcon
          onClick={handleEdit}
          icon="edit"
          buttonColor={color.white}
          iconColor={color.tblack}
          label="Edit"
        />
        <Divider height={10} />
        <ButtonLabelIcon
          onClick={() =>
            openModal('Are you sure to delete this data ?', () => {
              deleted(data.id);
              closeModal();
            })
          }
          icon="trash"
          buttonColor={color.red2}
          label="Delete"
        />
      </View>
      {modalAlert?.status && (
        <View styles={{position: 'absolute'}}>
          <ModalAlert data={modalAlert} close={() => closeModal()} />
        </View>
      )}
    </>
  );
}

export default ContactDetail;
