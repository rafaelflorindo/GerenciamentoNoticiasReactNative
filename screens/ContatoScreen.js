import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const ContatoScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');

  const nomeInputRef = useRef(null); // Referência para o campo Nome
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    // Foca no campo Nome quando o componente é montado
    nomeInputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    // Aqui você pode fazer o que quiser com os dados, como enviar para um servidor
    Alert.alert('Formulário enviado!', `Nome: ${nome}\nEmail: ${email}\nDescrição: ${descricao}`);
    // Limpa os campos após o envio
    

    if (nome && email && descricao) {
        setSubmitted(true);
      }
    /*
    setNome('');
    setEmail('');
    setDescricao('');*/
  };
  
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Contato</Text>
      <TextInput
        ref={nomeInputRef} // Adiciona a referência aqui
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />
      <Button style={styles.button} title="Enviar" onPress={handleSubmit} />
      
      {submitted && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Dados Enviados:</Text>
          {nome ? <Text>Nome: {nome}</Text> : null}
          {email ? <Text>Email: {email}</Text> : null}
          {descricao ? <Text>Descrição: {descricao}</Text> : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#A4D7E1', // Cor de fundo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366', // Azul Marinho
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#fff', // Azul Royal
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF', // Azul Royal
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  }, resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContatoScreen;
