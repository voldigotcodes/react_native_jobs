import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from "@react-navigation/native"


import Settings from './screens/settings';
import Messages from './screens/messages';
import MyJobs from './screens/myJobs';

import { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { Navigator, Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { useNavigatorContext } from 'expo-router/build/views/Navigator';
import MapScreen from './screens/MapScreen';

const HomeScreen = ({navigation}) =>{
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <SafeAreaView style={{ flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={()=>(navigation.openDrawer())}/>
                    ),
                    headerRight: () =>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={() => (router.push('screens/profile'))}/>
                    ),
                    headerTitle : ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex:1, 
                    padding : SIZES.medium
                }}
                >
                    <Welcome
                    searchTerm = {searchTerm}
                    setSearchTerm = {setSearchTerm}
                    handleClick = {() =>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />

                    {/* <Popularjobs/>
                    <Nearbyjobs/> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
      return(
        <>
            <Stack.Screen options={{headerShown:false}}/>
            <NavigationContainer independent={true}>
              <Drawer.Navigator useLegacyImplementation={false} >
                  <Drawer.Screen name="Home" component={HomeScreen}/>
                  <Drawer.Screen name="My Jobs" component={MyJobs}/>
                  <Drawer.Screen name="Messages" component={Messages}/>
                  <Drawer.Screen name="Map Screen" component={MapScreen}/>
                  <Drawer.Screen name="Settings" component={Settings}/>
              </Drawer.Navigator>
           </NavigationContainer>
        </>
      );
  }
export default DrawerNavigator;