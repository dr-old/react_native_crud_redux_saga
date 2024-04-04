/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ErrorMessage, TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';
import {useContact} from '../../../hooks/useContact';

const Home = () => {
  const {contacts, loadMore, reload} = useContact();
  const user = useSelector(state => state.generalReducer.user);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      reload();
    }, []),
  );

  console.log('contacts.contacts', contacts.contacts);

  return (
    <Container
      scrollview={false}
      loading={loading || contacts.loading}
      bgColor={color.white9}
      navbar={{
        type: 'home',
        title: `${user.data?.givenName} ${user.data?.familyName}`,
        imageProfile: `${user.data?.photo}`,
        onCart: () => {
          dispatch({type: 'CLEAN_FORM_TODO'});
          navigation.push('ContactForm', {data: {}, edit: false});
        },
      }}>
      <View style={styles.container}>
        {/* <Text>{users?.users?.length}</Text> */}
        <FlatList
          data={contacts.contacts}
          renderItem={({item}) => (
            <TileArticle
              item={item}
              onClick={() => {
                navigation.push('ContactDetail', {data: item});
              }}
            />
          )}
          ListEmptyComponent={() => (
            <ErrorMessage
              marginVertical={50}
              message="Data is not found, Please reload again!"
            />
          )}
          keyExtractor={item => `${helpers.getUid()}_${item.id.toString()}`}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          refreshing={contacts.loading}
          onRefresh={reload}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
