import React from 'react';
import { LeftNewsCards } from './left.news.source.cards';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';


export const LeftScreen = () => {
 
    return (
        <>
            <View style={styles.back}>
                <LeftNewsCards />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor:'black',
    },
  
})