// TabelaNoticias.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import EditarNoticia from './EditarNoticia'; // Componente de edição de notícias

const TabelaNoticias = ({ navigation }) => {
    const [noticias, setNoticias] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [editandoNoticiaId, setEditandoNoticiaId] = useState(null);

    useEffect(() => {
        fetchNoticias();
    }, []);

    const fetchNoticias = async () => {
        try {
            const response = await fetch('http://192.168.200.119:8080/noticias');
            if (!response.ok) {
                throw new Error('Erro ao buscar notícias');
            }
            const data = await response.json();
            setNoticias(data);
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    const excluirNoticia = async (id) => {
        if (Alert.alert('Confirmação', 'Tem certeza que deseja excluir esta notícia?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: async () => {
                try {
                    const response = await fetch(`http://192.168.200.119:8080/noticias/${id}`, { method: 'DELETE' });
                    if (!response.ok) throw new Error('Erro ao excluir a notícia');
                    setMensagem('Notícia excluída com sucesso!');
                    fetchNoticias();
                } catch (error) {
                    setMensagem(`Erro: ${error.message}`);
                }
            }}
        ]));
    };

    const renderNoticia = ({ item }) => (
        <View style={styles.noticiaContainer}>
            <View style={styles.noticiaContent}>
                <Text style={styles.titulo}>{item.titulo.substring(0,50)}</Text>
                <Text style={styles.descricao}>{item.descricao.substring(0, 100)}...</Text>
            </View>
            <View style={styles.acaoContainer}>
                <TouchableOpacity onPress={() => setEditandoNoticiaId(item.id)} style={styles.icone}>
                    <Icon name="create-outline" size={24} color="#4CAF50" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => excluirNoticia(item.id)} style={styles.icone}>
                    <Icon name="trash-outline" size={24} color="#F44336" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.tituloPagina}>Painel Administrativo - Notícias</Text>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => navigation.navigate('CadastroNoticia')}>
                <Text style={styles.addButtonText}>+ Adicionar novas notícias</Text>
            </TouchableOpacity>
            {editandoNoticiaId ? (
                <EditarNoticia
                    noticiaId={editandoNoticiaId}
                    aoSalvar={() => {
                        setEditandoNoticiaId(null);
                        fetchNoticias();
                    }}
                />
            ) : (
                <FlatList
                    data={noticias}
                    renderItem={renderNoticia}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    tituloPagina: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    mensagem: {
        fontSize: 16,
        color: 'green',
        marginBottom: 8,
    },
    noticiaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    noticiaContent: {
        flex: 1,
        paddingRight: 8,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
    },
    acaoContainer: {
        flexDirection: 'row',
    },
    icone: {
        marginLeft: 12,
    },
    addButton: {
        backgroundColor: '#0DBF8F',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    addButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TabelaNoticias;
