import React from 'react';

import { RightNewsCards } from './right.news.source.cards';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';


export const RightScreen = () => {

    return (
        <>
            <View style={styles.back}>
                <RightNewsCards />
            
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
       
        backgroundColor:'black',
    },
    text: {
     color: 'white',
     marginLeft: '30%', 

    }
})