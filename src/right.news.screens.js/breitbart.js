import React,{ useState, useEffect} from "react";
import { StyleSheet, Text, ScrollView, StatusBar, View, Linking, ActivityIndicator} from 'react-native';
import { Button, Card, Title} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Brietbart = () => {
    const [loading, setLoading] = useState(true)
    const [dataArray, setDataArray] = useState([])


    useEffect(()=> {
        fetch('https://newsapi.org/v2/top-headlines?sources=breitbart-news&apiKey=1ab8fb15471c4e7d9a6bc028f5e3f2f4')
        .then(res => res.json())
        .then(data => {
            setDataArray(data.articles)
            setLoading(false)
         })  
    }, [])


    return (
        <>
            <ScrollView style={styles.cardContainer} contentContainerStyle={{paddingBottom:160}}>
                {loading ? (
                    
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" style={styles.indicate} />
                        </View>
                    ) : (
                        dataArray.map((newsStory)=> {
                        const {  url, urlToImage, title,} = newsStory
                        return (
                            <>
                            <Card style={styles.card} onPress={()=> {Linking.openURL(url)}}>
                                <Card.Cover source={{ uri: urlToImage }} />
                                <Text style={styles.source}>Source: {newsStory.source.name}</Text>
                                <Title style={styles.cardTitle}>{title}</Title>
                                <MaterialCommunityIcons name="donkey" color={'white'} size={27} style={styles.donkey}/> 
                            </Card> 
                            </>
                        )
                    })
                )} 
            </ScrollView>
        
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor:'black',
    },
    cardContainer: {
        padding: 8,
        backgroundColor:'black',
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
        paddingTop: 16 ,
        paddingLeft: 16 ,
        fontFamily: 'Georgia',
        color: 'white',
    },
    loading: {
        flex: 1,
       backgroundColor: 'black',
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: '70%',
       marginBottom: '90%',
    },
    donkey: {
        padding: 8,
        fontFamily: 'Georgia',
        color: 'white',
        marginLeft: '87%'
      }
  
})