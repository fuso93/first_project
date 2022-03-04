// import Chat from "./screens/Chat";
// import Alarm from "./screens/Alarm";
// import Home from "./screens/Home";
// import Profile from "./screens/Profile";

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { Home, Profile, Alarm, Chat } from './screens';
import {Ionicons} from "@expo/vector-icons";
const  Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused
                                ? ("ios-home")
                                : ("home-outline")
                        } else if ( route.name === "Chat") {
                            iconName = focused
                                ? ("chatbox-ellipses")
                                : ("chatbox-ellipses-outline")
                        } else if ( route.name === "Alarm"){
                            iconName = focused
                                ? ("alarm-sharp")
                                : ("alarm-outline")
                        } else {
                            iconName = focused
                                ? ("person-circle")
                                : ("person-circle-outline")
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'lightGray'
                })}
            >
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"Chat"} component={Chat} />
                <Tab.Screen name={"Alarm"} component={Alarm}/>
                <Tab.Screen name={"Profile"} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default App;