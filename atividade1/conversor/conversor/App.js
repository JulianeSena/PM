import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Conversor</Text>

      <Text>Russia</Text>
      <TextInput placeholder='Real para Rublo'></TextInput>
      <TouchableOpacity style={styles.botao} onPress={() => alert('click!')}>
        <Text style={styles.textoBotao} >Converter</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    backgroundColor: '#01323bff',
    color:'#fffff'
  },
  textoBotao: {
    padding: 10
  }
});
