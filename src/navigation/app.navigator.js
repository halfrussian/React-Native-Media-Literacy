import React from "react";

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { CenterScreen } from "../center/center.screen";
import { LeftScreen } from "../left/left.screen";
import { RightScreen } from "../right/right.screen";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigator = () => {
    return (
      <Tab.Navigator 
      //initialRouteName="Center"
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' }}
      
      >
      {/* Left Icon */}
        <Tab.Screen 
            name="Left" 
            component={LeftScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="donkey" color={'white'} size={27} />
              ),
            }}/>


      {/* Center Icon */}

        <Tab.Screen 
          name="Center"
          
          component={CenterScreen} 
          options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="set-center" color={'white'} size={27} />
          ),
        }}/>

      {/* Right Icon */}
        <Tab.Screen 
            name="Right" 
            component={RightScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="elephant" color={'white'} size={27} />
              ),
            }}/>
      </Tab.Navigator>
    );
  }

 