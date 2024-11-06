import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import rafaelImage from '../assets/images/rafael.jpeg';
const SobreMimScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
      <Image
            source={rafaelImage}
            style={styles.profileImage}
          />

        <Text style={styles.name}>Rafael Alves Florindo</Text>
        <Text style={styles.role}>Professor de Tecnologia</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Sobre Rafael</Text>
        <Text style={styles.description}>
          Com experiência na docência de tecnologia em cursos técnicos e de graduação, 
          Rafael Alves Florindo se dedica a formar futuros profissionais com uma abordagem prática e inovadora.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Missão</Text>
        <Text style={styles.text}>
        Inspirar e preparar os alunos para o mercado de tecnologia, incentivando uma aprendizagem contínua e relevante.
        </Text>

        <Text style={styles.subTitle}>Visão</Text>
        <Text style={styles.text}>
        Conectar o futuro da tecnologia com a educação de hoje, formando profissionais capazes de transformar o mercado.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F0F2F5',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default SobreMimScreen;
