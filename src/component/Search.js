import { TextInput, View, StyleSheet } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="restaurants,  foods"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: "#white",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
     elevation: 300,
    shadowOpacity: .7,
    padding:20,
    borderRadius:40
    
  },
});
