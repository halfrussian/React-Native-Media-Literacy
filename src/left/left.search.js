import React,{ useState, useEffect,  useContext  } from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Linking, ActivityIndicator} from 'react-native';
import { Button, Card, Title} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Search = () => {

    const [loading, setLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    const [dataArray, setDataArray] = useState([])
   

function imFetchingTheNews() {

        if(searchWord == '') {
            return null
        } else {

    setLoading(true)
     let newsUrl = 
     'https://newsapi.org/v2/everything?q=' + 
     searchWord + 
     '&apiKey=1ab8fb15471c4e7d9a6bc028f5e3f2f4';

     fetch(newsUrl)
        .then(res => res.json())
        .then(data => {
           // console.log(data.articles[1].source.name)
             setDataArray(data.articles)
            setLoading(false)
            //console.log(searchWord)        
         })
        
        }

    }

return (
    <>
        <SearchContainer>
            <Searchbar
            style={styles.search}
                placeholder="Search Left News "
                onChangeText={(text) => {
                setSearchWord(text)
                }}
                value={searchWord}
                onSubmitEditing={() => {
                    imFetchingTheNews()
                  }}
            >
            </Searchbar>
            
        </SearchContainer>
      
<SafeAreaView>
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
</SafeAreaView>
    </>
   )
}


const SearchContainer = styled.View`
  padding: 8px;
  color: white;
  background-color: black;
`;

const styles = StyleSheet.create({
    search:{
        backgroundColor: 'lightgray',
        marginTop:50,
    },
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