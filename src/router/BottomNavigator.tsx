import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {ButtonIcon, Icon} from '../components/atoms';
import {color} from '../utils/styles';
import {Home, Setting} from '../containers/pages';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

const MenuArray = [
  {
    name: 'Home',
    comp: Home,
    icon: 'home',
    type: null,
  },
  // {
  //   name: 'Search',
  //   comp: Search,
  //   icon: 'search',
  //   type: null,
  // },
  {
    name: 'Profile',
    comp: Setting,
    icon: 'user-alt',
    type: 'FontAwesome5',
  },
];

interface ItemTabProps {
  focused: boolean;
  icon: string;
  clr: string;
  type?: any;
  name: string;
}

const ItemTab: React.FC<ItemTabProps> = ({focused, icon, clr, type, name}) => {
  // if (name === 'Profile') {
  //   return (
  //     <Image
  //       source={constant.images.profile}
  //       style={{
  //         ...styles.image,
  //         borderColor: color === colors.blue ? colors.blue : 'transparent',
  //       }}
  //     />
  //   );
  // }
  return (
    <View style={styles.center}>
      <Animatable.View
        animation={focused ? 'bounceIn' : ''}
        iterationCount={focused ? 'infinite' : 1}
        direction="alternate"
        style={styles.center}>
        <View
          style={{
            ...styles.tabBar,
            backgroundColor:
              clr === color.green4 ? color.green4 : 'transparent',
          }}
        />
        <Icon
          library={type === 'FontAwesome5' ? 'FontAwesome5' : 'MaterialIcons'}
          name={icon}
          color={clr}
          size={type === 'FontAwesome5' ? 16 : 24}
        />
      </Animatable.View>
    </View>
  );
};

const MyTabs: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: color.green4,
          tabBarInactiveTintColor: color.green9,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        {MenuArray.map((item, index) => (
          <Tab.Screen
            key={index.toString()}
            name={item.name}
            component={item.comp}
            options={{
              tabBarIcon: ({focused, color}) => {
                return (
                  <ItemTab
                    clr={color}
                    icon={item.icon}
                    focused={focused}
                    type={item.type}
                    name={item.name}
                  />
                );
              },
            }}
          />
        ))}
      </Tab.Navigator>
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          right: '38.5%',
        }}>
        <ButtonIcon
          type={styles.icon}
          style={styles.inputIcon}
          name={'plus'}
          size={30}
          onClick={() => {
            dispatch({type: 'CLEAN_FORM_TODO'});
            navigation?.push('ContactForm', {data: {}, edit: false});
          }}
        />
      </View>
    </View>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tabBarStyle: {
    backgroundColor: color.green10,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height * 0.08
        : Dimensions.get('window').height * 0.12,
    borderTopWidth: 0,
    elevation: 0,
    position: 'absolute',
    marginHorizontal: 30,
    marginBottom: 10,
    borderRadius: 20,
  },
  iconCenter: {
    backgroundColor: color.white1,
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOverlay: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 10 : 40,
    left: '50%',
    right: '50%',
    alignItems: 'center',
    zIndex: 2,
  },
  center: {alignItems: 'center'},
  tabBar: {
    width: 8,
    height: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 30,
    borderWidth: 2,
  },
  icon: {
    backgroundColor: color.green4,
    borderColor: color.green4,
    color: color.white,
  },
  inputIcon: {
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: color.green4,
    borderColor: color.background3,
    borderWidth: 10,
  },
});
