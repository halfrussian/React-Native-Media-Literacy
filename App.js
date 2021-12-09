import * as React from 'react';


import { RightScreen } from './src/right/right.screen';
import { LeftScreen } from './src/left/left.screen';
import { CenterScreen } from './src/center/center.screen';

import { CnnScreen } from './src/news.screens.js/cnn';
import { Reuters } from './src/news.screens.js/reuters';
import { TheVerge } from './src/news.screens.js/the.verge';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { BottomNavigator } from './src/navigations/bottom.navigator';



const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
        {/* <NavigationContainer>
            <BottomNavigator /> 
          
        </NavigationContainer> */}
   

{/* Top Navigator */}
    <NavigationContainer style={styles.back}>
      <Stack.Navigator initialRouteName='Center'>
        <Stack.Screen name="Center" component={CenterScreen}/>
        <Stack.Screen name='Left' component={LeftScreen} />
        <Stack.Screen name="Right" component={RightScreen}/>
        <Stack.Screen name="CNN" component={CnnScreen}/>
        <Stack.Screen name="Reuters" component={Reuters}/>
        <Stack.Screen name="TheVerge" component={TheVerge}/>
      </Stack.Navigator>    
    </NavigationContainer>   



    </>
  );
}


const styles = StyleSheet.create({

  back: {

      backgroundColor:'black',
    
      },

})