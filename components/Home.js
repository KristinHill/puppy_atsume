import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Our puppies will live and play here!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
