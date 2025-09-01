import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button} from 'react-native';

export default function App() {

  const [nome,  setNome]  = useState('')
  const [email, setEmail] = useState('')
  const [tele,  setTele]  = useState('')
  const [ende,  setEnde]  = useState('')

  const enviar = () => {
    //console.log(nome)
    alert( "Salvo com sucesso!" + "\n" + nome + "\n" 
      + email + "\n" + tele + "\n" + ende
    )
  }


  return (

    <KeyboardAvoidingView  behavior='padding' style={estilo.container}>

      <Image 
      source={require('./assets/image.png')} 
      style={{width:200, height:200, borderRadius:50}}
      />

      <Text style={estilo.titulo}>Rainha do Funk!</Text>
      <Text style={estilo.Subtitulo}>Valesca Popozuda fã clube.</Text>

      <TextInput placeholder='Nome' autoCapitalize='words' style={estilo.input} onChangeText={nome => setNome(nome)}/>
      <TextInput placeholder='Email' inputMode='email' style={estilo.input} onChangeText={email => setEmail(email)}/>
      <TextInput placeholder='Celular' inputMode='tel' style={estilo.input} onChangeText={tele => setTele(tele)}/>
      <TextInput placeholder='Endereço' style={estilo.input} onChangeText={ende => setEnde(ende)}/>

      <Button title="Valescar" onPress={enviar}/>
      

    </KeyboardAvoidingView>
  );
}

const estilo = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#ffb0dda0',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {

    fontSize: 50,
    color: '#ffffff',
    fontWeight:'800',
    alignItems:'center',
    marginTop:20

  },

  Subtitulo:{

    fontSize: 25,
    color:'#ffffffff',
    fontWeight:'800'

  },

  input:{

    backgroundColor:'#ffffff',
    width: '70%',
    marginTop: 15,
    borderColor:'#00000000',
    borderWidth:1,
    borderRadius:70

  }
});
