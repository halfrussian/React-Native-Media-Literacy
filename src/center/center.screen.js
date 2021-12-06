import React from "react";
import { StyleSheet, View, Text,} from 'react-native';
import { colors } from "../theme/colors";

export const CenterScreen = () => {

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.para}>There is no such thing as an unbaised news sources</Text>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
      alignItems: 'center',
     justifyContent: 'center',

    },
    para: {
        color: 'gray',
        fontSize: 20,
        padding: 20,
    }
  });
  