import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import stylesCust from './stylesCust';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {BarHeader} from '../../../components/molecules';
import packageJson from '../../../../package.json';
import {Divider} from '../../../components/atoms';

const Splash = () => {
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();

  useEffect(() => {
    navigateToLogin();
  });

  const navigateToLogin = async () => {
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    return wait(2000).then(() => {
      if (user?.token) {
        navigation.replace('MyTabs');
      } else {
        navigation.replace('Login');
      }
    });
  };

  return (
    <>
      <BarHeader bgcolor={color.green11} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[color.green11, color.blue7]}
        style={{flex: 1}}>
        <View style={stylesCust.page}>
          <View style={stylesCust.logoText}>
            <Text style={styles.h1(color.white, null, 'textSemiBold')}>
              Crud
            </Text>
            <Text style={styles.textBase(30, color.white, 'textLight', 'none')}>
              App
            </Text>
          </View>
          <Text style={styles.p4(color.white, 'center')}>
            Copyright by Danni Ramdan
          </Text>
        </View>
        <Text style={styles.p4(color.white, 'center')}>
          Version {packageJson.version}
        </Text>
        <Divider height={30} />
      </LinearGradient>
    </>
  );
};

export default Splash;
