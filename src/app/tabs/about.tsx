import { StyleSheet, Text, View } from "react-native";


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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
