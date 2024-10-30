import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Importando o Stack Navigator
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import QuemSomosScreen from './screens/QuemSomosScreen';
import ContatoScreen from './screens/ContatoScreen';
import CadastroNoticiaScreen from './screens/CadastroNoticiaScreen';
import DetalhesNoticiaScreen from './screens/DetalhesNoticiaScreen'; // Importando a tela de detalhes

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Criando um Stack Navigator

// Componente para o Stack de Notícias
const NoticiasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Noticias" component={NoticiasScreen} />
      <Stack.Screen name="DetalhesNoticia" component={DetalhesNoticiaScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />

      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#0DBF8F',
            tabBarInactiveTintColor: '#7A7A7A',
            tabBarStyle: {
              backgroundColor: '#1E1E1E',
              height: 65,
              borderTopWidth: 0,
            },
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#E0E0E0',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Notícias"
            component={NoticiasStack} // Usando o Stack de Notícias aqui
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="newspaper-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Quem Somos"
            component={QuemSomosScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="people-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="CadastroNoticia"
            component={CadastroNoticiaScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="add-circle-outline" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Contatos"
            component={ContatoScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="call-outline" size={28} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fundo escuro do app
  },
  button: {
    backgroundColor: '#0DBF8F', // Verde neon
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#1E1E1E', // Texto escuro no botão neon
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#3A3A3A', // Cinza escuro
    color: '#E0E0E0', // Texto claro
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E0E0E0', // Texto claro
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#A0A0A0', // Cinza intermediário para texto secundário
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0E0E0', // Texto claro para título das notícias
    marginBottom: 10,
  },
  newsText: {
    fontSize: 16,
    color: '#A0A0A0', // Cinza intermediário para descrição
  },
});
