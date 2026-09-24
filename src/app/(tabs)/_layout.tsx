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
      }
    })}>
    </Tabs>
  );
}
