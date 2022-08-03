import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import pal from './assets/pal-intro.jpeg';
// import background from './assets/background.jpeg';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.introduction}>Hey there, my name is Pal!</Text>
      <Image source={pal} style={styles.image} />
      <Text style={styles.teachyou}>I'm gonna teach you how to play Puppy Atsume!</Text>
      
      <TouchableOpacity
        onPress={() => this.setState}
        style={{ backgroundColor: '#AED9E0' }}>
        <Text style={styles.alert}>Click here to start</Text>
      </TouchableOpacity>

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
  },
  image: {
    width: 335,
    height: 400,
    marginBottom:10
  },
  introduction: {
    color: '#000',
    fontSize: 22,
    marginHorizontal: 15
  },
  teachyou: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 15
  },
  alert: {
    fontSize: 20,
    color: '#fff'
  }
});
