import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import QuemSomosScreen from './screens/QuemSomosScreen';
import ContatoScreen from './screens/ContatoScreen';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> {/* Configuração da StatusBar */}
    
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8e8e93',
          tabBarStyle: { backgroundColor: '	#4682B4' },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
          }} 
        />
        <Tab.Screen 
          name="Notícias" 
          component={NoticiasScreen} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="newspaper-outline" size={24} color={color} />
          }} 
        />
        <Tab.Screen 
          name="Quem Somos" 
          component={QuemSomosScreen} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color={color} />
          }} 
        />
        <Tab.Screen 
          name="Contatos" 
          component={ContatoScreen} 
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="call-outline" size={24} color={color} />
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}