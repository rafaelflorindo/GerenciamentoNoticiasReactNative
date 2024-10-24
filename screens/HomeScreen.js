// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424_1280.jpg' }} // Substitua pela URL da sua imagem
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo ao Nosso App!</Text>
      <Text style={styles.description}>
        Aqui você pode encontrar as últimas notícias, saber mais sobre nós e entrar em contato conosco.
      </Text>

      <View style={styles.buttonContainer}>
        <Button style={'marginBottom:10px'}
          title="Ver Notícias" 
          onPress={() => navigation.navigate('Notícias')} 
        />
        <Button style={'marginBottom:10px'}
          title="Quem Somos" 
          onPress={() => navigation.navigate('Quem Somos')} 
        />
        <Button style={'marginBottom:10px'}
          title="Contato" 
          onPress={() => navigation.navigate('Contato')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#A4D7E1', // Cor de fundo
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#003366', // Azul Marinho
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#007BFF', // Azul Royal
    marginTop: 20,
  },
});

export default HomeScreen;

/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Cor de fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;*/