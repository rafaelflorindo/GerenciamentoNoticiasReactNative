import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

const noticias = [
    {
      id: '1',
      titulo: 'Notícia 1',
      descricao: 'Esta é a descrição da notícia 1.',
      imagem: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg',
      detalhes: 'Aqui estão mais detalhes sobre a notícia 1. Ela é muito interessante e informativa!',
    },
    {
      id: '2',
      titulo: 'Notícia 2',
      descricao: 'Esta é a descrição da notícia 2.',
      imagem: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png',
      detalhes: 'Aqui estão mais detalhes sobre a notícia 2. Ela também é bastante relevante.',
    },
    {
      id: '3',
      titulo: 'Notícia 3',
      descricao: 'Esta é a descrição da notícia 3.',
      imagem: 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_1280.jpg',
      detalhes: 'Mais informações sobre a notícia 3 podem ser encontradas aqui.',
    },
    {
      id: '4',
      titulo: 'Notícia 4',
      descricao: 'Esta é a descrição da notícia 4.',
      imagem: 'https://cdn.pixabay.com/photo/2018/07/01/20/01/dashboard-3510327_1280.jpg',
      detalhes: 'Aqui estão mais detalhes sobre a notícia 4. Uma leitura obrigatória!',
    },
  ];

const NoticiasScreen = () => {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notícias</Text>

      {noticias.map(noticia => (
        <TouchableOpacity
          key={noticia.id}
          style={styles.newsContainer}
          onPress={() => navigation.navigate('DetalhesNoticia', { noticia })} // Navega para o detalhe
        >
          <Image source={{ uri: noticia.imagem }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>{noticia.titulo}</Text>
          <Text style={styles.newsText}>{noticia.descricao}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#A4D7E1', // Azul Claro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366', // Azul Marinho
    marginBottom: 16,
  },
  newsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  newsText: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
});

export default NoticiasScreen;
