import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <View style={styles.box1}>
        <Text>box 1</Text>
      </View>

      <View style={styles.box2}>
        <Text>box 2</Text>
      </View>

      <View style={styles.box3}>
        <Text>box 3</Text>
      </View>
      
      <View style={styles.box4}>
        <Text>box 4</Text>
      </View>
    
          <View style={styles.box5}>
        <Text>box 5</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flaxWrap:'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    //coloca no inicio da tela (cima)
    // justifyContent: 'flex-end' fina da tela (baixo)
    // justifyContent: 'flex-evely' divide igualmente o espaço entre os elementos
    // justifyContent: 'flex-
  },
  box1:{
    //flex:1,
    backgroundColor: '#ff0202ff',
    width: 100,
    height: 200
  },
  box2:{
    //flex:1,
    backgroundColor: '#ff9900ff',
    width: 100,
    height: 200
  },
  box3:{
    //flex:1,
    backgroundColor: '#dafa08ff',
    width: 100,
    height: 200
  },
  box4:{
    //flex:1,
    backgroundColor: '#95fa08ff',
    width: 100,
    height: 200
  },
  box5:{
    //flex:1,
    backgroundColor: '#79fa08ff',
    width: 100,
    height: 200
  }

});
