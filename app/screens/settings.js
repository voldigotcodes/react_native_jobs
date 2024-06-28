import { View, Text } from "react-native";
import { ScreenHeaderBtn } from "../../components";
import { Stack, useRouter } from "expo-router";

import {COLORS, icons, images, SIZES } from '../../constants'


const Settings = ({navigation}) => {
    const router = useRouter();
    return(
        <View>
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
            <Text>Settings</Text>
        </View>
    );
}

export default Settings