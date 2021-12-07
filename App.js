import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigator } from './src/navigation/app.navigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

    <NavigationContainer>
      <BottomNavigator />     
    </NavigationContainer>

    </>
  );
}


