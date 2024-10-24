import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const QuemSomosScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Quem Somos</Text>
        <View style={styles.imagesContainer}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/31/11/17/office-2360063_1280.jpg' }} // URL da primeira imagem
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/23/20/36/signature-2003808_1280.jpg' }} // URL da segunda imagem
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Missão</Text>
        <Text style={styles.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</Text>
        
        <Text style={styles.subTitle}>Visão</Text>
        <Text style={styles.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</Text>

        <Text style={styles.subTitle}>Valores</Text>
        <Text style={styles.text}>-Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</Text>
        <Text style={styles.text}>-Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#A4D7E1', // Cor de fundo
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366', // Azul Marinho
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default QuemSomosScreen;