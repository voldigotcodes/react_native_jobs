import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../app/index';

const Drawer = createDrawerNavigator();

const drawerNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Profile" component={Home}/>
                <Drawer.Screen name="Settings" component={Home}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default drawerNavigator;
