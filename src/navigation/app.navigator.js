import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CenterScreen } from "../center/center.screen";

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Center" component={CenterScreen} />
      
      </Tab.Navigator>
    );
  }