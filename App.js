
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  Text, Pressable,TouchableOpacity } from 'react-native';
import {useState} from "react"
export default function App() {
  let [count, setCount]= useState(1)
  let [disable, setDisable]=useState(null)
  function up(e){
    setDisable(true)
    if (count>29){
      return
    }
    setCount(count+1)
  }
  function down(e){
    setDisable(true)
    if (count<1){
      return
    }
    setCount(count-1)
  }
  function on(e){
    setDisable(null)
    return
  }
  function off(e){
    return
  }
  return (
    <View style={styles.container}>
      <View style={styles.count2}>
        <View style={styles.count}>
        <Pressable style={styles.buttonUp} onPress={down}>
            <Text style={styles.ButtonText}>−</Text>
          </Pressable>
          <Text style={styles.text}>{count}</Text>
          <Pressable style={styles.buttonUp} onPress={up}>
            <Text style={styles.ButtonText}>+</Text>
          </Pressable>
        </View>
      </View>


      <View style={styles.containerCen}>
        <TouchableOpacity onPress={on} style={[styles.test, disable && styles.bg]}>
          <Text style={styles.text2}>start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={off} style={styles.test2}>
          <Text style={styles.text2}>off</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
  },
  text: {
    marginRight: 20,
    marginLeft:10,
    fontSize: 70
  },
  text2:{
    textAlign:"center",
    fontSize:70
  },
  buttonUp:{
    textAlign:"center",
    width: 50,
  },
  ButtonText:{
    fontSize: 70,
  },
  count:{
    
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  count2: {
    alignItems:"center",
  },
  containerCen:{
    alignItems:"center",
  },
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  test:{
    borderRadius:30,
    marginTop: 50,
    width: 200,
    backgroundColor:"gray",
    alignItems:"center",
    position:"absolute"
  },
  test2:{
    borderRadius:30,
    marginTop: 160,
    width: 200,
    backgroundColor:"gray",
    alignItems:"center",
    position:"absolute"
  },
  bg: {
    backgroundColor: "silver"
  }
});
