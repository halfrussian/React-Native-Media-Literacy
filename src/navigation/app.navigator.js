import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CenterScreen } from "../center/center.screen";
import { LeftScreen } from "../left/left.screen";
import { RightScreen } from "../right/right.screen";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
      <Tab.Navigator 
      tabBarOptions={{
     }}
      
      >
      {/* Left Icon */}
        <Tab.Screen 
            name="Left" 
            component={LeftScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="donkey" color={'blue'} size={40} />
              ),
            }}/>


      {/* Center Icon */}

        <Tab.Screen 
          name="Center"
          
          component={CenterScreen} 
          options={{
          tabBarIcon: () => (
            <FontAwesome5 name="handshake" color={'purple'} size={30} />
          ),
        }}/>

      {/* Right Icon */}
        <Tab.Screen 
            name="Right" 
            component={RightScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="elephant" color={'red'} size={40} />
              ),
            }}/>
      </Tab.Navigator>
    );
  }

 