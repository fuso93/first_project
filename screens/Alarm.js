import React from 'react';
import { View, Text } from 'react-native';

const Alarm = () =>{
    return(
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'red'
            }}
        >
            <Text>
                Alarm
            </Text>
        </View>
    )
}
export default Alarm;