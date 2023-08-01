import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import User from './User';
import Tabs from './Tabs';
import User1 from '../../User1';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const Appnavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="User"
        component={User}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Appnavigation;
