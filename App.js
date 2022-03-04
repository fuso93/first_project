// import Chat from "./screens/Chat";
// import Alarm from "./screens/Alarm";
// import Home from "./screens/Home";
// import Profile from "./screens/Profile";

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Alarm, Chat } from './screens';

const  Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"Home"} component={Home} />
                <Tab.Screen name={"Chat"} component={Chat} />
                <Tab.Screen name={"Alarm"} component={Alarm}/>
                <Tab.Screen name={"Profile"} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default App;