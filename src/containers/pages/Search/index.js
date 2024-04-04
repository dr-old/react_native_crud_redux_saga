/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';
import {useContact} from '../../../hooks/useContact';
import {ButtonIcon, Divider, InputText} from '../../../components/atoms';

const Search = () => {
  const {contacts, loadMore, reload} = useContact();
  const user = useSelector(state => state.generalReducer.user);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(contacts.contacts);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useFocusEffect(
  //   React.useCallback(() => {
  //     reload();
  //   }, []),
  // );

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
      bgColor={color.white9}>
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
          {filteredData.map(item => (
            <TileArticle
              key={helpers.getUid() + '_' + item.id.toString()}
              item={item}
              onClick={() => navigation.push('ContactDetail', {data: item})}
            />
          ))}
          {contacts.contacts.length === 0 && ( // Show message when no data
            <ErrorMessage
              marginVertical={50}
              message="Data is not found, Please reload again!"
            />
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
    backgroundColor: color.white,
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

export default Search;
