import React from 'react';
import { Button, Card, Title} from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity} from 'react-native';

//navigatiing 


import { useNavigation } from '@react-navigation/native';



export const LeftNewsCards = () => {
    
    const navigation = useNavigation(); 
    
    return (
        <>
        <ScrollView>
            <View style={styles.otherBack}>
                <TouchableOpacity onPress={()=> navigation.navigate('CNN')} >
                    <Image style={styles.image} source={{uri: 'https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/CNN.png'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Reuters')} >
                    <Image style={styles.image} source={{uri: 'https://www.cityharvest.org/wp-content/uploads/2018/12/Reuters-Logo.jpg' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.back}>
                <TouchableOpacity onPress={()=> navigation.navigate('TheVerge')} >
                    <Image style={styles.image} source={{uri: 'https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Buzzfeed')} >
                    <Image style={styles.image} source={{uri: 'https://www.lionnewspaper.com/wp-content/uploads/2018/02/BF.jpg'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.back}>
                <TouchableOpacity onPress={()=> navigation.navigate('ABC')} >
                    <Image style={styles.image} source={{uri: 'https://bottega.tech/wp-content/uploads/2019/07/abcnews-logo-5.jpg'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('CBS')} >
                    <Image style={styles.image} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51UjITm0Z-L.png'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.back}>
                <TouchableOpacity onPress={()=> navigation.navigate('MSNBC')} >
                    <Image style={styles.image} source={{uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/6593/brand.gif?DunbXmzcg190SEzEpiQFHF5cEAA6.6Tw&itok=_v81AqQk'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('BBC')} >
                    <Image style={styles.image} source={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/1926656_10151955586072217_265500303_n.png?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=x4CFZ7ztiNQAX8C08q1&_nc_ht=scontent-dfw5-1.xx&oh=442ba3323688a701fdc62dbcc7379a52&oe=61D70371'}} />
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
