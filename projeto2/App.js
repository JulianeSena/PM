import { Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (

    <View style = {styles.container} >

      <Text style = {styles.subtitulo}>Melhor funkeira dos anos 2000</Text>

      <TouchableHighlight style={styles.botao} onPress={() => alert('click!')} >
        <Text style={styles.botaoTexto} > Valesca </Text>
      </TouchableHighlight>

      <TouchableOpacity style = {styles.botao} onPress={() => alert('click!')} >
         <Text style = {styles.botaoTexto} > Tati  </Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert('clicando')} style={styles.botao} 
        onHoverIn={() => alert('chegou em cima')}>
        <Text style={styles.botaoTexto}> Mc Carol </Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa9cffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    padding: 10,
    borderBottomColor: '#0000',
    borderWidth: 1,
    borderRadius: 80,
    backgroundColor:'#ffffffff'
  },

  botaoTexto: {
    color:'#000000ff',
    fontSize: 16,
    fontWeight: 800
  }, 

  text:{
    padding:10,
    color:'#000000',
    fontSize: 25
  },
  subtitulo: {
    padding:10,
    color:'#000000',
    fontSize: 25
  }

});
