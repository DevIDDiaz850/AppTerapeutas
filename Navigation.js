import * as React from 'react';
import { Ionicons, } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import SingUp from "./src/screens/singUp";
import CreateAccount from "./src/screens/createAccount";
import Home from './src/screens/home';
import WriteThougts from './src/screens/WriteThoughts';
import AudioThoughts from './src/screens/AudioThoughts';
import VideoThoughts from './src/screens/VideosThoughts';
import NoteEditorScreen from './src/screens/NotesWrite';
import Therapists from './src/screens/ListTerapist';
import TherapistDetails from './src/screens/therapistProfile';
import StoryDetailScreen from './src/screens/historyTips';
import OnboardingTest from './src/screens/QuestionsScreen';
import Perfil from './src/screens/perfil';
import Activity from './src/screens/Activity';
import Test from './src/screens/Tests';
import Settings from './src/screens/sethings';
import ChatBot from './src/screens/chatBot';
import Diary from './src/screens/Diary';
import CustomDrawer from './src/components/CustomDrawer';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="SingUp" component={SingUp} />
            <Stack.Screen name="Index" component={DrawerMain} />
        </Stack.Navigator>
    );
}

const DrawerMain = () => {
    return (
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} /> }
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor:"#0FCCCE",
                drawerActiveTintColor:"#fff",
                drawerInactiveTintColor:"#0FCCCE",
                drawerLabelStyle:{
                    fontWeight:"black",
                    fontSize:20,
                    marginLeft: -20
                }
            }}
        >
            <Drawer.Screen options={{ drawerIcon: ({color}) => (<Ionicons name="home-outline" size={30} color={color}/>), }} name="Inicio" component={StackNavigator} />
            <Drawer.Screen options={{ drawerIcon: ({ size, color }) => (<Ionicons name="analytics-outline" size={30} color={color}/>), }} name="Actividad" component={Activity} />
            <Drawer.Screen options={{ drawerIcon: ({ size, color }) => (<Ionicons name="people-outline" size={30} color={color}/>), }} name="Terapistas" component={Therapists} />
            <Drawer.Screen options={{ drawerIcon: ({ size, color }) => (<Ionicons name="clipboard-outline" size={30} color={color} />), }} name="Tests" component={Test} />
            <Drawer.Screen options={{ drawerIcon: ({ size, color }) => (<Ionicons name="settings-outline" size={30} color={color}/>), headerShown: true }} name="Ajustes" component={Settings} />
        </Drawer.Navigator>
    );
}

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Index" component={TabBar} />
            <Stack.Screen name="Write" component={WriteThougts} />
            <Stack.Screen name="Audio" component={AudioThoughts} />
            <Stack.Screen name="Video" component={VideoThoughts} />
            <Stack.Screen name="NoteEditor" component={NoteEditorScreen} />
            <Stack.Screen name="TestClient" component={Test} />
            <Stack.Screen name="Therapistli" component={Therapists} />
            <Stack.Screen name="TherapistP" component={TherapistDetails} />
            <Stack.Screen name='History' component={StoryDetailScreen} />
            <Stack.Screen name='Perfil'  options={{ headerShown: true }} component={Perfil}  />
            <Stack.Screen name='Onboarding' options={{ headerShown: false }} component={OnboardingTest} />
        </Stack.Navigator>
    )
}

function TabBar({setTab}) {

    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor:"#0FCCCE",
            tabBarActiveTintColor:"#fff",
            tabBarItemStyle:{
                borderRadius:70,
                

            },
            tabBarInactiveBackgroundColor:"#fff",
            tabBarStyle: {
                width:"97%",
                margin:"auto",
                borderTopLeftRadius:70,
                borderTopRightRadius:70,
                borderBottomEndRadius:70,
                borderBottomStartRadius:70,
                marginBottom:10,
                elevation:0,
                borderColor:"#fff"
            },
     
   
            
        }}
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" size={24} color={color} />
                }}
            />
            <Tab.Screen name='Diary' component={Diary}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="book-outline" size={24} color={color} />
                }}
            />
            <Tab.Screen name='IAsistente' component={ChatBot}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="chatbox-outline" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}


// Principal navigation
export default function Navigation() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}
