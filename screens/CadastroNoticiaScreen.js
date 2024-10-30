import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const CadastroNoticiaScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');
  const [imagem, setImagem] = useState('');
  const [urlError, setUrlError] = useState('');

  const validateURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d](?:[a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|'+ // domain name
      'localhost|' + // localhost
      '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP
      '\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)' + // IPv6
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  };

  const handleSubmit = async () => {
    if (titulo && descricao && link && imagem) {
      if (validateURL(link) && validateURL(imagem)) {
        try {
          const response = await axios.post('http://192.168.200.119:8080/noticias', {
            titulo,
            descricao,
            link,
            imagem,
          });
          Alert.alert('Notícia cadastrada!', `ID: ${response.data.id}\nTítulo: ${titulo}`);
          // Limpa os campos após o envio
          setTitulo('');
          setDescricao('');
          setLink('');
          setImagem('');
          setUrlError(''); // Limpa a mensagem de erro
        } catch (error) {
          console.error('Erro no Axios:', error); // Log de erro detalhado
          if (error.response) {
            // O servidor respondeu com um código de status fora do intervalo 2xx
            Alert.alert('Erro', `Erro ${error.response.status}: ${error.response.data.error || 'Erro ao cadastrar a notícia. Tente novamente.'}`);
          } else if (error.request) {
            // A requisição foi feita, mas não há resposta do servidor
            Alert.alert('Erro', 'Sem resposta do servidor. Verifique sua conexão e tente novamente.');
          } else {
            // Algo aconteceu ao configurar a requisição que lançou um erro
            Alert.alert('Erro', `Erro: ${error.message}`);
          }
        }
      } else {
        setUrlError('Por favor, insira URLs válidas para o link e a imagem.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Notícia</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline={true} // Permite texto longo
        numberOfLines={4} // Número de linhas exibidas
      />
      <TextInput
        style={[
          styles.input,
          urlError && { borderColor: '#FF0000' }, // Destaque para erro
        ]}
        placeholder="Link (URL)"
        value={link}
        onChangeText={(text) => {
          setLink(text);
          if (urlError && validateURL(text)) {
            setUrlError(''); // Limpa a mensagem de erro se a URL se tornar válida
          }
        }}
      />
      <TextInput
        style={[
          styles.input,
          urlError && { borderColor: '#FF0000' }, // Destaque para erro
        ]}
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={(text) => {
          setImagem(text);
          if (urlError && validateURL(text)) {
            setUrlError(''); // Limpa a mensagem de erro se a URL se tornar válida
          }
        }}
      />
      {urlError ? <Text style={styles.error}>{urlError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar Notícia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8', // Fundo suave
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#A0A0A0',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  textArea: {
    height: 100, // Altura maior para área de texto
    borderColor: '#A0A0A0',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    textAlignVertical: 'top', // Faz o texto começar no topo
  },
  error: {
    color: '#FF0000',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF', // Azul
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CadastroNoticiaScreen;