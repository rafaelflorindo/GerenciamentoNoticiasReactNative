import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const QuemSomosScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Quem Somos</Text>
        <View style={styles.imagesContainer}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/31/11/17/office-2360063_1280.jpg' }} 
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/23/20/36/signature-2003808_1280.jpg' }} 
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Missão</Text>
        <Text style={styles.text}>
          Inovar no ensino com metodologias tecnológicas que transformam o aprendizado.
        </Text>

        <Text style={styles.subTitle}>Visão</Text>
        <Text style={styles.text}>
          Ser referência em educação tecnológica, conectando o futuro ao presente.
        </Text>

        <Text style={styles.subTitle}>Valores</Text>
        <Text style={styles.text}>- Inovação</Text>
        <Text style={styles.text}>- Transparência</Text>
        <Text style={styles.text}>- Colaboração</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F7F9FC', // Fundo clean claro
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366', // Azul escuro
    textAlign: 'center',
    marginBottom: 24,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Texto escuro para subtítulos
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555', // Texto cinza
    lineHeight: 24,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF', // Borda azul para destaque
  },
});

export default QuemSomosScreen;
