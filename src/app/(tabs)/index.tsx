import { StyleSheet, View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Button title="Go to About" onPress={() => router.push({
        pathname : '/about',
        params : {username : 'kamal', age : 30}
      })} />
        <View style={{marginTop : 10}}></View>
      <Button title="Go to Contact" onPress={() => router.push('/contact')} />
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
