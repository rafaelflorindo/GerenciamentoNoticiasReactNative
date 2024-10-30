import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const ContatoScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nomeInputRef = useRef(null);
  
  useEffect(() => {
    nomeInputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (nome && email && descricao) {
      Alert.alert('Formulário enviado!', `Nome: ${nome}\nEmail: ${email}\nDescrição: ${descricao}`);
      setSubmitted(true);
      setNome('');
      setEmail('');
      setDescricao('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <TextInput
        ref={nomeInputRef}
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
        style={styles.textArea}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={handleSubmit} color="#007AFF" />
      </View>
      
      {submitted && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Dados Enviados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Email: {email}</Text>
          <Text>Descrição: {descricao}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F9FC', // Fundo clean claro
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366', // Azul Marinho
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlignVertical: 'top', // Para que o texto inicie no topo
  },
  buttonContainer: {
    marginTop: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E9F7EF', // Fundo leve
    borderRadius: 8,
    elevation: 2, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContatoScreen;
