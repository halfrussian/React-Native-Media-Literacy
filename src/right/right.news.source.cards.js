import React from 'react';
import { Button, Card, Title} from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';

//navigatiing 


import { useNavigation } from '@react-navigation/native';



export const RightNewsCards = () => {
    
    const navigation = useNavigation(); 
    
    return (
        <>
        <ScrollView>
            <View style={styles.otherBack}>
                <TouchableOpacity onPress={()=> navigation.navigate('Fox News')} >
                    <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/150px-Fox_News_Channel_logo.svg.png'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Breitbart')} >
                    <Image style={styles.image} source={{uri: 'https://www.theladders.com/s3proxy/company-photo.theladders.com/43213/56e21abd-369f-47d8-82b6-ffa9a7eaf7fe.jpg' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.back}>
                <TouchableOpacity onPress={()=> navigation.navigate('Washington Times')} >
                    <Image style={styles.image} source={{uri: 'https://twt-assets.washtimes.com/img/twt-square-logo.d7356f2c5f6b.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('WJS')} >
                    <Image style={styles.image} source={{uri: 'https://mlt.org/wp-content/uploads/2017/04/WSJ-Logo.jpg'}} />
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
    
}


const styles = StyleSheet.create({
    otherBack : {
        marginTop: '8%',
        backgroundColor:'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    back: {
        marginTop: '8%',
        backgroundColor:'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        },
    text: {
        color: 'white',
        fontSize: 40,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginTop: 2
    },
})