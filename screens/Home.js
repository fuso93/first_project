import React from 'react';
import { View, Text } from 'react-native';
import Alarm from "./Alarm";

const Home = () =>{
    return(
        <View
            style={{
                flex:1,
                justifycontent:'center',
                alignItems:'center',
                backgroundColor: 'gray'
            }}
        >
            <Text>
                Home
            </Text>
        </View>
    )
}
export default Home;