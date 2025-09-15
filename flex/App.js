import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Touchable, TouchableOpacity, Image, Alert, Linking } from 'react-native';


export default function App() {
  

    const desc = (tipo) => {
      let titulo=''
      let descricao=''
      let video=''

      if(tipo == 'React'){
        titulo = 'React-Native'
        descricao = 'Reac-Native'
        video = 'https://youtu.be/Gsa_4s3CjmI?si=DrkGTKWbE0vXRS8Q'
      }

      else if(tipo == 'flutter'){
        titulo = 'Flutter'
        descricao = 'Flutter'
        video = 'https://youtu.be/FaTa-wJIWZ0?si=KI9vavk-SmiCWHhB'
      }

      else if(tipo == 'js'){
        titulo = 'Js'
        descricao = 'js'
        video = ''
      }
      else if(tipo == 'py'){
        titulo = 'py'
        descricao = 'Py'
        video = ''
      }
    }

    Alert.alert(
      titulo,
      descricao,
      [
        {
          text:'Ver Videp',
          onPress: () => Linking.canOpenURL(video)
        },
        {
          text:'Fechar',
          onPress: () => null
        }
      ]
    )
  }
  
  return(
    <View style={styles.container}>
    
      <TouchableOpacity style={styles.box1} onPress={() => desc('React')}>
        <Text>Sonic</Text>
        <Image source={require('./assets/sonic.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box2}>
        <Text>shadow</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.box3}>
        <Text>Amy</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.box4}>
        <Text>Knuckles</Text>
      </TouchableOpacity>

    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flaxWrap:'wrap',
    alignContent:'center',
    rowGap:50,
    columGap:50,
    paddingTop:200,
    paddingBottom:200,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center'
    
    
    //coloca no inicio da tela (cima)
    // justifyContent: 'flex-end' fina da tela (baixo)
    // justifyContent: 'flex-evely' divide igualmente o espaço entre os elementos
    // justifyContent: 'flex-
  },
  box1:{
    //flex:1,
    backgroundColor: '#fffdfd8b',
    width: 80,
    height: 100,
    borderRadius: 20,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  box2:{
    backgroundColor: '#fffdfd8b',
    width: 80,
    height: 100,
    borderRadius: 20,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  box3:{
    backgroundColor: '#fffdfd8b',
    width: 80,
    height: 100,
    borderRadius: 20,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  box4:{
    backgroundColor: '#fffdfd8b',
    width: 80,
    height: 100,
    borderRadius: 20,
    padding:20,
    alignItems:'center',
    justifyContent:'center'
  },
  style:{
    width:40,
    height:40
  }

});
