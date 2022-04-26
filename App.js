import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header';
import Search from './src/component/Search';

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
    <Search/>

      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: 'green',
      // alignItems: 'center',
      // justifyContent: 'center',

    },
  });
