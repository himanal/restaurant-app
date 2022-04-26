import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>grap your </Text>
      <Text style={styles.bolidiHeader}>delicous meal! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
    backgroundColor: "#f2f2f2x",
  },

  lightHeader: {
    fontSize: 35,
   
  },
  bolidiHeader: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
   
  },
});
