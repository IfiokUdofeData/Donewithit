import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mendus! Happy Convocation </Text>
      <Text style={styles.textSmall}>That was a great journey  </Text>
      <Text style={styles.textSmall}>God will give you more grace  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    color: 'white',
    padding: 40,
  },

  textSmall: {
    fontSize: 15,
    color: 'white',
    padding: 5,
  },
  
});
