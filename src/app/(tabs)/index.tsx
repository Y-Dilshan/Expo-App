import { StyleSheet, View, Text, Button, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchPosts = async () => {
    try {
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setData(json);
    }
    catch (err:any) {
      setError(err.message);
    }
    finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect (() => {
    fetchPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts();
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if(error) {
    return (
      <View style={styles.container}>
        <Text style={{color : 'red', fontSize : 18}}>{error}</Text>
        <Button title="Retry" onPress={fetchPosts} />
      </View>
    );
  }
      
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.id}</Text>
          <Text>{item.userId}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
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
