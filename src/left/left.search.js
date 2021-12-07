import React,{ useState, useEffect,  useContext  } from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Linking, ActivityIndicator} from 'react-native';
import { Button, Card, Title} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export const Search = () => {

    const [loading, setLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    const [finalinput, setFinalInput] = useState('')
    const [dataArray, setDataArray] = useState([])

function imFetchingTheNews() {
    setLoading(true)
    setFinalInput(searchWord)

    let newsUrl = 'abc' + finalinput + 'dec'

    fetch(newsUrl)
        .then(res => res.json())
        .then(newsData => {
            setDataArray(newsData)
        })
}

const hello = ()=> {
    console.log('almost there ')
}
    
return (
    <>
        <SearchContainer>
            <Searchbar
            style={styles.search}
                placeholder="Search for a News Topic"
                onChangeText={(text) => {
                setSearchWord(text)
                }}
                value={searchWord}
                onSubmitEditing={() => {
                    hello()
                  }}
            >
            </Searchbar>
        </SearchContainer>


<SafeAreaView> 
    <ScrollView>
    {loading ? (
        <View style={styles.loading}>
            
            <ActivityIndicator size="large" style={styles.indicate} />
        </View>

) : (
   
null

 )}
    </ScrollView>
</SafeAreaView>

        {/* <SafeAreaView>
            <ScrollView style={styles.cardContainer} contentContainerStyle={{paddingBottom:260}}>
                <Card style={styles.card} >
                    <Card.Cover source={{ uri: "https://cdn.cnn.com/cnnnext/dam/assets/210223101615-02-david-perdue-0924-super-tease.jpg" }} />
                    <Text style={styles.source}>{searchWord}</Text>
                    <Title style={styles.cardTitle}>"David Perdue officially announces run for governor in Georgia, setting up primary challenge to Brian Kemp - CNN"</Title>
                </Card>
                <Card style={styles.card} onPress={()=> {Linking.openURL('https://amp.theguardian.com/technology/2021/dec/07/best-mid-range-wifi-6-mesh-systems-to-solve-broadband-dead-zones')}}>
                    <Card.Cover source={{ uri: "https://i.guim.co.uk/img/media/cc473f694280ec2d9f11ac75cca95c14060c4138/0_273_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f8ace4db1af868a4ceecdc9d8c06774d" }} />
                    <Text style={styles.source}>Source: The Guardian</Text>
                    <Title style={styles.cardTitle}>Fromage fictions: the 14 biggest cheese myths – debunked!</Title>
                </Card>
            </ScrollView>
        </SafeAreaView> */}

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
    indicate: {
     
        
    }
})