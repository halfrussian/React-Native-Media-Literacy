import React,{ useState, useEffect } from 'react';
import { Search } from './left.search';
import { LeftCards } from './left.card';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

export const LeftScreen = () => {


    return (
        <>
        <View style={styles.back}>
            <Search/>
            <LeftCards />
        </View>
            
        
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor:'black',
    }
})