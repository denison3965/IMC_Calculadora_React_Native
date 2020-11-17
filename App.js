import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] =useState('')
  const [altura, setAltura] = useState('')

  function  handleSubmit () {
    const alt = altura / 100
    const imc = peso / (alt * alt)
    

    if(imc < 18.6){
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Pesso idela!!!' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso!' + imc.toFixed(2))
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o IMC</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder='Peso (kg)'
      keyboardType='numeric'
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder='Altura (cm)'
      keyboardType='numeric'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 3,
    margin: 15,
    padding: 10,
    color: '#121212',
    fontSize: 23,
    borderBottomWidth: 3,
    borderBottomColor: '#121212',
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    margin: 15,

    padding: 10,
    backgroundColor: '#41A'
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
  },
})
