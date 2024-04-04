import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Setting,
  Splash,
  ContactDetail,
  ContactForm,
  Home,
} from '../containers/pages';
import MyTabs from './BottomNavigator';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Splash', comp: Splash, header: false},
    {name: 'MyTabs', comp: MyTabs, header: false},
    {name: 'Home', comp: Home, header: false},
    {name: 'Setting', comp: Setting, header: false},
    {name: 'ContactDetail', comp: ContactDetail, header: false},
    {name: 'ContactForm', comp: ContactForm, header: false},
  ];

  return (
    <Stack.Navigator initialRouteName="Splash">
      {page.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.comp}
            options={{headerShown: item.header}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default DashboardStack;
