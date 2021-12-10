
import * as React from 'react';

import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { LeftScreen } from '../left/left.screen';
import { RightScreen } from '../right/right.screen';
import 'react-native-gesture-handler';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

//Left
import { BuzzFeedScreen } from '../news.screens.js/buzzfeed';
import { ABC } from '../news.screens.js/abc.news';
import { CBS } from '../news.screens.js/cbs';
import { MSNBC } from '../news.screens.js/msnbc';
import { BBC } from '../news.screens.js/bbc';
import { CnnScreen } from '../news.screens.js/cnn';
import  { Reuters } from '../news.screens.js/reuters';
import   { TheVerge } from '../news.screens.js/the.verge';

//Right
import { FoxNews } from '../right.news.screens.js/fox';
import { Brietbart } from '../right.news.screens.js/breitbart';
import { Washington } from '../right.news.screens.js/washington';
import { WJS } from '../right.news.screens.js/wsj';

const LeftStack = createNativeStackNavigator ();

const RightStack = createNativeStackNavigator ();

export const LeftNavigator = () => {
    return (
        <>
    <LeftStack.Navigator initialRouteName='Left' style={styles.left}>
        <LeftStack.Screen name="Left" component={LeftScreen} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}  />
        <LeftStack.Screen name="CNN" component={CnnScreen} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="Reuters" component={Reuters} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="TheVerge" component={TheVerge} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="Buzzfeed" component={BuzzFeedScreen} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="ABC" component={ABC} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="CBS" component={CBS} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="MSNBC" component={MSNBC} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <LeftStack.Screen name="BBC" component={BBC} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
  </LeftStack.Navigator>    
  </>
    )
 
} 


export const RightNavigator = () => {
   
    return (
        <>
    <RightStack.Navigator initialRouteName='Right' >
        <RightStack.Screen name="Right" component={RightScreen} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <RightStack.Screen name="WJS" component={WJS} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <RightStack.Screen name="Washington Times" component={Washington} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <RightStack.Screen name="Breitbart" component={Brietbart} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
        <RightStack.Screen name="Fox News" component={FoxNews} options={{headerStyle: {backgroundColor:'#383838',},headerTintColor: '#fff', headerTitleStyle:{fontSize: 18}}}/>
  </RightStack.Navigator>    
  </>
    )
 
} 


const styles = StyleSheet.create({

    back: {
  
        backgroundColor:'black',
      
        },
        left: {
            color: 'yellow',
            backgroundColor: 'black'
        }
  
  })