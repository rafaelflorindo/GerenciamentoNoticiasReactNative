// DetalhesNoticiaScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetalhesNoticiaScreen = ({ route }) => {
  const { noticia } = route.params; // Recebe os dados da notícia via parâmetros

  return (
    <View style={styles.container}>
      <Image source={{ uri: noticia.imagem }} style={styles.image} />
      <Text style={styles.title}>{noticia.titulo}</Text>
      <Text style={styles.description}>{noticia.descricao}</Text>
      <Text style={styles.details}>{noticia.detalhes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  details: {
    fontSize: 16,
    color: '#888',
  },
});

export default DetalhesNoticiaScreen;