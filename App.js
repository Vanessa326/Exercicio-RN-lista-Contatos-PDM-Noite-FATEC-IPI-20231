import React, { useState } from 'react' 
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Button 
} from 'react-native';


export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);
  
  const capturarNome = (nomeDigitado) => {
    setNome(nomeDigitado)}

  const capturarTel = (telDigitado) => {
      setTelefone(telDigitado)}

  var cont = 0
  const adicionarContato = () =>  {
    const aux = contatos.push([nome,telefone]);
    
    setContatos(aux);

    console.log(contatos)

    setNome('')
    setTelefone('')
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        CONTATOS
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={capturarNome}
        placeholder="Nome"
        value={nome}
      />
      <TextInput
        style={styles.input}
        onChangeText={capturarTel}
        value={telefone}
        placeholder="Telefone"
        keyboardType="numeric"
      />

      <Button
        title="Salvar Contato"
        onPress={adicionarContato}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
  },
  baseText: {
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
