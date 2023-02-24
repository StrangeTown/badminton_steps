import { StyleSheet, Text, View } from "react-native";

export default function HomeList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});