import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function About() {
  const { username, age } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to About Screen</Text>
      <Text style={styles.content}>
        Username: {username}
      </Text>
      <Text style={styles.content}>
        Age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    marginTop: 10,
  },
});
