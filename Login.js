import { StyleSheet, Text, View, } from 'react-native';
import Buttton from './components/nut';
import InputBox from './components/maininput';
import Logo from './components/homelogo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputBox style={styles.textinput} txtlabel="Account"/>
      <Text></Text>
      <InputBox style={styles.textinput} txtlabel="Password"/>
      <Text>{"\n"}</Text>
      <Buttton label="   Login  "/>
      <Text>{"\n"}or{"\n"}</Text>
      <Buttton label="Register "/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  textinput:{
    
  }
});