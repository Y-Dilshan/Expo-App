import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack screenOptions={{ 
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' },
  }}>
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="about" options={{ title: 'About' }} />
    <Stack.Screen name="contact" options={{ title: 'Contact' }} />
  </Stack>
  );
}
