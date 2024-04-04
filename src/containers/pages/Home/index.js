/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {ErrorMessage, TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';
import {useContact} from '../../../hooks/useContact';
import {ButtonIcon, Divider, InputText} from '../../../components/atoms';

const Home = () => {
  const {contacts, loadMore, reload} = useContact();
  const user = useSelector(state => state.generalReducer.user);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      reload();
    }, []),
  );

  useEffect(() => {
    unsubscribe();
  }, [contacts.contacts]);

  const unsubscribe = () => {
    setFilteredData(contacts.contacts);
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = contacts?.contacts?.filter(
      item =>
        item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLowerCase()) ||
        item.age.toString().toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <Container
      scrollview={false}
      loading={loading || contacts.loading}
      bgColor={color.background3}
      navbar={{
        type: 'home',
        title: `${user.data?.givenName} ${user.data?.familyName}`,
        imageProfile: `${user.data?.photo}`,
        // onCart: () => {
        //   dispatch({type: 'CLEAN_FORM_TODO'});
        //   navigation.push('ContactForm', {data: {}, edit: false});
        // },
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchInput}>
            <ButtonIcon
              type={styles.icon}
              style={styles.inputIcon}
              name={'search'}
              size={15}
              onClick={handleSearch}
            />
            <InputText
              placeholder="Search in here ..."
              value={searchQuery}
              onChangeText={handleSearch}
              // returnKeyType="search"
              // onSubmitEditing={handleSearch}
            />
          </View>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={contacts.loading} onRefresh={reload} />
          }
          onScroll={({nativeEvent}) => {
            if (
              nativeEvent.layoutMeasurement.height +
                nativeEvent.contentOffset.y >=
              nativeEvent.contentSize.height
            ) {
              loadMore();
            }
          }}
          scrollEventThrottle={400}>
          {filteredData.length === 0 ? ( // Show message when no data
            <ErrorMessage
              marginVertical={150}
              message="Data is not found, Please reload again!"
            />
          ) : (
            filteredData?.map(item => (
              <TileArticle
                key={helpers.getUid() + '_' + item.id.toString()}
                item={item}
                onClick={() => navigation.push('ContactDetail', {data: item})}
              />
            ))
          )}
          <Divider height={70} />
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Dimensions.get('window').height * 0.08,
    marginBottom: 20,
    marginHorizontal: 30,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: color.background,
    borderRadius: 30,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: color.green4,
    borderColor: color.green4,
    color: color.white,
  },
  inputIcon: {
    padding: 5,
    borderRadius: 20,
    marginRight: 5,
    justifyContent: 'center',
    backgroundColor: color.green4,
  },
});

export default Home;
