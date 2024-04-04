import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container, SettingList} from '../../organism';
import packageJson from '../../../../package.json';
import useAction from './useAction';
import {useNavigation} from '@react-navigation/native';

function Setting() {
  const {user, signOut} = useAction();
  const navigation = useNavigation();

  return (
    <Container bgColor={color.background3}>
      {user?.data ? (
        <View style={stylesCust.user}>
          <Image
            source={{uri: user.data?.photo}}
            style={stylesCust.userImage}
          />
          {/* <View style={stylesCust.userPhoto}>
            <Text
              style={stylesCust.initPhoto}>{`${user?.data?.firstName?.charAt(
              0,
            )}${user?.data?.lastName?.charAt(0)}`}</Text>
          </View> */}
          <Text
            style={styles.h3()}>{`${user.data?.givenName} ${user.data?.familyName}`}</Text>
          <Text style={stylesCust.userEmail}>{user?.data?.email}</Text>
          {/* <Text style={stylesCust.userEmail}>{user?.token}</Text> */}
        </View>
      ) : null}
      <View style={stylesCust.container}>
        <SettingList
          title="General"
          data={[
            {
              icon: 'share-2',
              label: 'Version',
              subtitle: packageJson.version,
            },
            // {
            //   icon: 'calendar',
            //   label: 'Calendar',
            //   onClick: () => navigation.push('Calendar'),
            // },
            {
              icon: 'power',
              label: 'Logout',
              onClick: () => signOut(),
            },
          ]}
        />
      </View>
    </Container>
  );
}

const stylesCust = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    marginTop: 20,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  initPhoto: [
    styles.textBase(45, color.white, 'textSemiBold', 'uppercase'),
    {textAlign: 'center', paddingTop: 10},
  ],
  userEmail: [styles.p5(color.white5), {textTransform: 'lowercase'}],
  userPhoto: {
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 20,
    backgroundColor: color.green4,
  },
  userImage: {
    resizeMode: 'cover',
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 20,
  },
});

export default Setting;
