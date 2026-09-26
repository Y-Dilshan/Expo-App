import { StyleSheet, View, Text, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
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
