import React,{ useState, useEffect } from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { StyleSheet} from 'react-native';


export const Search = () => {


    const [keyword, setKeyword] = useState('')
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
      setSearchKeyword(keyword);
    }, [keyword]);


return (

<SearchContainer>
    <Searchbar
    style={styles.search}
        placeholder="Search for a News Topic"
        onChangeText={(text) => {
        setSearchKeyword(text)
        }}
        value={searchKeyword}
    />
</SearchContainer>

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
        
    }
})