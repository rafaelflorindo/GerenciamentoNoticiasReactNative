// EditarNoticia.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditarNoticia = ({ noticiaId, aoSalvar }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        buscarNoticia();
    }, [noticiaId]);

    const buscarNoticia = async () => {
        try {
            const response = await fetch(`http://192.168.200.119:8080/noticias/${noticiaId}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar notícia');
            }
            const data = await response.json();
            setTitulo(data.titulo);
            setDescricao(data.descricao);
            setLink(data.link);
            setImagem(data.imagem);
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    const handleSalvar = async () => {
        const noticiaAtualizada = { titulo, descricao, link, imagem };

        try {
            const response = await fetch(`http://192.168.200.119:8080/noticias/${noticiaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticiaAtualizada),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar a notícia');
            }

            setMensagem('Notícia atualizada com sucesso!');
            aoSalvar();
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Notícia</Text>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                multiline
                numberOfLines={4}
            />
            <TextInput
                style={styles.input}
                placeholder="Link"
                value={link}
                onChangeText={setLink}
            />
            <TextInput
                style={styles.input}
                placeholder="Imagem (URL)"
                value={imagem}
                onChangeText={setImagem}
            />
            <Button title="Salvar" onPress={handleSalvar} color="#4CAF50" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    mensagem: {
        fontSize: 16,
        color: 'green',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#DDD',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textarea: {
        height: 80,
        textAlignVertical: 'top',
    },
});

export default EditarNoticia;
