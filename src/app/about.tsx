import * as Device from 'expo-device';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from '../../.expo/types/router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 22,
    fontWeight: 'bold',
  },

});
