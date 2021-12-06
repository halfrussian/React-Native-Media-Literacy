import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export const LeftCards = () => {

    return (
        <SafeAreaView>
            <ScrollView style={styles.cardContainer} contentContainerStyle={{paddingBottom: 160}}>
            <Card style={styles.card}>
               <Card.Cover source={{ uri: "https://cdn.cnn.com/cnnnext/dam/assets/210223101615-02-david-perdue-0924-super-tease.jpg" }} />
               <Text style={styles.source}>Source: CNN</Text>
               <Title style={styles.cardTitle}>"David Perdue officially announces run for governor in Georgia, setting up primary challenge to Brian Kemp - CNN"</Title>
            </Card>
            <Card style={styles.card}>
               <Card.Cover source={{ uri: "https://i.guim.co.uk/img/media/cc473f694280ec2d9f11ac75cca95c14060c4138/0_273_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f8ace4db1af868a4ceecdc9d8c06774d" }} />
               <Text style={styles.source}>Source: The Guardian</Text>
               <Title style={styles.cardTitle}>Fromage fictions: the 14 biggest cheese myths – debunked!</Title>
            </Card>
            </ScrollView>
            
        </SafeAreaView>
    )
}

//Styling 


const styles = StyleSheet.create({
   
    cardContainer: {
        padding: 8,
    },
    cardTitle: {
        padding: 16,
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'Georgia',
        color: 'white',
    },
    card: {
        color: 'white',
        marginTop: 16,
        borderRadius: 8,
        backgroundColor: '#383838',
    },
    source: {
        fontSize: 24,
        padding: 16,
        fontFamily: 'Georgia',
        color: 'white',
    },
    emptySpace: {
        padding: 64,
    }
})