import React from 'react';
import { Search } from './left.search';

import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';


export const LeftScreen = () => {

    return (
        <>
            <View style={styles.back}>
                <Search />
                <Text style={styles.text}>No News Yet</Text>
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
     marginLeft: '35%', 

    }
})