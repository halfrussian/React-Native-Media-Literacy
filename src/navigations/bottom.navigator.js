import * as React from 'react';


import { LeftScreen } from '../left/left.screen';
import { CenterScreen } from '../center/center.screen';
import { RightScreen } from '../right/right.screen';
//newsScreens
import { CnnScreen } from '../news.screens.js/cnn';

import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

export const BottomNavigator = () => {
 return (
     <>
 <Tab.Navigator 
      initialRouteName="Right"
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' }}
      >
          
        <Tab.Screen 
            name="Left" 
            component={LeftScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="donkey" color={'white'} size={27} />
              ),
            }}/>
        <Tab.Screen 
          name="Center"
          component={CenterScreen} 
          options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="set-center" color={'white'} size={27} />
          ),
        }}/>
        <Tab.Screen 
            name="Right" 
            component={RightScreen} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="elephant" color={'white'} size={27} />
              ),
            }}/>
      </Tab.Navigator>   
     </>
 )
}

