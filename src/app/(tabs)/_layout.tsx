import { SplashScreen, Stack, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Tabs screenOptions={({route}) => ({
      tabBarActiveTintColor: 'tomato',
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName:any;

        if(route.name === 'index') {
          iconName = focused ? 'home' : 'home-outline';
        } else if(route.name === 'about') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }else if(route.name === 'contact') {
          iconName = focused ? 'call' : 'call-outline';
        } 

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>

        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="about" options={{ title: 'About' }} />
        <Tabs.Screen name="contact" options={{ title: 'Contact' }} />
    </Tabs>
  );
}
