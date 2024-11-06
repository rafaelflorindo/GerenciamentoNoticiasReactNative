import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Importando Axios

const NoticiasScreen = () => {
  const navigation = useNavigation();
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Função para buscar as notícias
  const fetchNoticias = async () => {
    try {
      const response = await axios.get('http://192.168.200.119:8080/noticias'); // Requisição para o backend
      setNoticias(response.data); // Atualiza o estado com as notícias recebidas
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  // Efeito para buscar as notícias ao montar o componente
  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tecnologia e Programação</Text>
      
      {loading ? ( // Exibe indicador de carregamento enquanto busca as notícias
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        noticias.map(noticia => (
          <TouchableOpacity
            key={noticia.id}
            style={styles.newsContainer}
            
            onPress={() => navigation.navigate('DetalhesNoticia', { noticia })}
          >
            <Image source={{ uri: noticia.imagem }} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{noticia.titulo}</Text>
            <Text style={styles.newsText}>{noticia.descricao}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  newsContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Azul Marinho
  },
  newsText: {
    fontSize: 16,
    marginTop: 4,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF', // Azul
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NoticiasScreen;
