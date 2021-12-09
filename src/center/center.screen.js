import React from "react";
import { colors } from "../theme/colors";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CenterScreen = () => {
    const navigation = useNavigation(); 

    return (
        <ScrollView style={styles.black}>
            <View style={styles.otherBack}>
                    <Text style={styles.para}>There is no such thing as an unbaised news source. </Text>
                    <Text style={styles.para}>Every media company has a vested interest in controlling how you think.</Text>
                    <Text style={styles.para}>Always look at both sides of the story because the truth is usually in the center.</Text>
                    <Text style={styles.para}>Happy Exploring</Text>
                    <View style={styles.btnContainer}>
                    <Button icon="donkey" mode="contained" style={styles.button} onPress={()=> navigation.navigate('Left')}>Left</Button>
                    <Button icon="elephant" mode="contained" onPress={()=> navigation.navigate('Right')} style={styles.button}>Right</Button>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    black: {
        backgroundColor: '#383838',
      
    },
    para: {
        fontFamily: 'Georgia',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 16,
    },
    button: {
        backgroundColor: 'black',
        paddingLeft: 24,
        paddingRight: 24, 
        paddingTop: 8,
        paddingBottom: 8,
    }, 
    btnContainer: {
        marginTop: '16%',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }, 
    otherBack: {
        backgroundColor: '#383838',
        justifyContent: 'center',
        marginTop: '8%',
        
    }
  });
  