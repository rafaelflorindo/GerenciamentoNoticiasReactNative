// DetalhesNoticiaScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';

const DetalhesNoticiaScreen = ({ route, navigation }) => {
  const { noticia } = route.params || {}; // Verifica se os parâmetros existem

  if (!noticia) {
    // Exibe alerta e volta para a tela anterior se não houver dados
    Alert.alert('Erro', 'Nenhuma notícia encontrada.');
    navigation.goBack();
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: noticia.imagem }} style={styles.image} />
      <Text style={styles.title}>{noticia.titulo}</Text>
      <Text style={styles.description}>{noticia.descricao}</Text>
      <Text style={styles.details}>{noticia.detalhes}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: '#003366',
  },
  description: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  details: {
    fontSize: 16,
    color: '#888',
    lineHeight: 24,
  },
});

export default DetalhesNoticiaScreen;
