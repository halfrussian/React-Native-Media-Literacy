import * as React from 'react';
import { CenterScreen } from '../center/center.screen';
import { RightScreen } from '../right/right.screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LeftNavigator } from '../stack.navigation.js/stack';
import { RightNavigator } from '../stack.navigation.js/stack';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigator = () => {
 return (
     <>
 <Tab.Navigator 
      initialRouteName="Center"
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#383838' }}
      >
          
        <Tab.Screen 
            name="Democrat" 
            component={LeftNavigator} 
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
            name="Republican" 
            component={RightNavigator} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="elephant" color={'white'} size={27} />
              ),
            }}/>
      </Tab.Navigator>   
     </>
 )
}

