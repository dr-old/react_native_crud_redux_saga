import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';
import {helpers} from '../../utils';

interface TileArticleProps {
  item: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
  };
  onClick: () => void;
}

const TileArticle: React.FC<TileArticleProps> = ({item, onClick}) => {
  const [imageExists, setImageExists] = useState(true);

  const handleImageError = () => {
    setImageExists(false);
  };

  return (
    <>
      <TouchableOpacity onPress={onClick} style={stylesCust.article}>
        <View style={stylesCust.articleBody}>
          {imageExists && helpers.isHttpUrl(item.photo) ? (
            <Image
              source={{uri: item.photo}}
              style={{width: 48, height: 48, borderRadius: 10}}
              onError={handleImageError}
            />
          ) : (
            <ButtonIcon type={stylesCust.buttonType} name="user" size={20} />
          )}
          <Divider width={10} height={0} />
          <View style={stylesCust.articleCardText}>
            <Text style={[styles.h5()]} numberOfLines={2}>
              {`${item.firstName} ${item.lastName}`}
            </Text>
            <Divider height={3} />
            <Text numberOfLines={2} style={[styles.p4()]}>
              {item.age} years old
            </Text>
            {/* <Divider height={5} /> */}
            {/* <Text style={[styles.p5(color.green4)]}>{item.photo}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const stylesCust = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: 'row',
  },
  article: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: color.background5,
    marginHorizontal: 30,
  },
  articleBody: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleCard: {
    height: 80,
    width: 80,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  articleCardText: {
    flex: 1,
    justifyContent: 'center',
  },
  articleCardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color.green5,
    borderRadius: 15,
  },
  buttonType: {
    backgroundColor: color.oranget2,
    borderColor: color.oranget2,
    color: color.white,
  },
});

export default TileArticle;
