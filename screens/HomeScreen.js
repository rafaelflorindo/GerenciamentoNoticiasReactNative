// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [ultimaNoticia, setUltimaNoticia] = useState(null);

  useEffect(() => {
    // Busca a última notícia do backend
    const fetchUltimaNoticia = async () => {
      try {
        const response = await fetch('http://192.168.200.119:8080/noticias');
        const noticias = await response.json();
        setUltimaNoticia(noticias[0]); // assume que a última notícia é a primeira do array
      } catch (error) {
        console.error('Erro ao buscar a última notícia:', error);
      }
    };

    fetchUltimaNoticia();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Educação, tecnologia movendo o futuro.</Text>
        </View>
      </ImageBackground>

      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>Sobre Rafael Alves Florindo</Text>
        <Text style={styles.sectionText}>
          Professor de tecnologia para cursos técnicos e de graduação, apaixonado por inovar no ensino e conectar estudantes ao futuro da tecnologia.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Quem Somos')}>
          <Text style={styles.linkButtonText}>Saiba mais sobre mim</Text>
        </TouchableOpacity>
      </View>

      {ultimaNoticia && (
        <View style={styles.noticiaContainer}>
          <Text style={styles.sectionTitle}>Última Notícia</Text>
          <Text style={styles.noticiaTitle}>{ultimaNoticia.titulo.substring(0,100)}</Text>
          <Text style={styles.noticiaText}>{ultimaNoticia.descricao.substring(0, 150)}...</Text>
          <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Notícias')}>
            <Text style={styles.linkButtonText}>Ver todas as notícias</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.cursosContainer}>
        <Text style={styles.sectionTitle}>Cursos em Destaque</Text>
        <View style={styles.cursoItem}>
          <Text style={styles.cursoTitle}>Curso de Desenvolvimento Mobile</Text>
          <Text style={styles.cursoDescription}>Aprenda a criar aplicativos com React Native e desenvolva suas habilidades em dispositivos móveis.</Text>
        </View>
        <View style={styles.cursoItem}>
          <Text style={styles.cursoTitle}>Curso de Segurança da Informação</Text>
          <Text style={styles.cursoDescription}>Domine técnicas e ferramentas para proteger dados e garantir a segurança em sistemas digitais.</Text>
        </View>
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Cursos')}>
          <Text style={styles.linkButtonText}>Ver todos os cursos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.projetosContainer}>
        <Text style={styles.sectionTitle}>Projetos Realizados</Text>
        <View style={styles.projetoItem}>
          <Text style={styles.projetoTitle}>Aplicativo de Gestão Escolar</Text>
          <Text style={styles.projetoDescription}>Projeto desenvolvido para facilitar a gestão de dados acadêmicos em instituições de ensino.</Text>
        </View>
        <View style={styles.projetoItem}>
          <Text style={styles.projetoTitle}>Portal de Notícias em Tecnologia</Text>
          <Text style={styles.projetoDescription}>Portal digital com notícias e artigos sobre inovações tecnológicas e tendências do mercado.</Text>
        </View>
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Projetos')}>
          <Text style={styles.linkButtonText}>Ver todos os projetos</Text>
        </TouchableOpacity>
      </View>
      {/* Seção de Perfis Sociais */}
      <View style={styles.socialContainer}>
        <Text style={styles.sectionTitle}>Conecte-se Comigo</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={[styles.socialButton, styles.githubButton]}
            onPress={() => openLink('https://github.com/rafaelflorindo')}
          >
            <Text style={styles.socialButtonText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, styles.linkedinButton]}
            onPress={() => openLink('https://www.linkedin.com/in/rafaelflorindo')}
          >
            <Text style={styles.socialButtonText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F7F9FC',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 51, 102, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  aboutContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  linkButton: {
    alignSelf: 'flex-start',
  },
  linkButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noticiaContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  noticiaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  noticiaText: {
    fontSize: 14,
    color: '#666',
  },
  cursosContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  cursoItem: {
    marginBottom: 12,
  },
  cursoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cursoDescription: {
    fontSize: 14,
    color: '#666',
  },
  projetosContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  projetoItem: {
    marginBottom: 12,
  },
  projetoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  projetoDescription: {
    fontSize: 14,
    color: '#666',
  },
  socialContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  githubButton: {
    backgroundColor: '#333', // Cor do GitHub
  },
  linkedinButton: {
    backgroundColor: '#0077B5', // Cor do LinkedIn
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
