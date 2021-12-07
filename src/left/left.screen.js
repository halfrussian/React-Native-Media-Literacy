import React from 'react';
import { Search } from './left.search';

import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';


export const LeftScreen = () => {

    return (
        <>
            <View style={styles.back}>
                <Search />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor:'black',
    }
})