import React from 'react';
import { RightSearch } from './right.search';

import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';


export const RightScreen = () => {

    return (
        <>
            <View style={styles.back}>
                <RightSearch />
                <Text style={styles.text}>No Right Wing News Yet</Text>
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