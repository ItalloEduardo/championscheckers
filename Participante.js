import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Participantes = () => {
    const navigation = useNavigation();
    const [participants, setParticipants] = useState([]);

    // Função para adicionar participante
    const addParticipant = (newParticipant) => {
        setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
    };

    // Função para remover participante
    const removeParticipant = (id) => {
        Alert.alert(
            "Remover Participante",
            "Tem certeza que deseja remover este participante?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sim", onPress: () => setParticipants(participants.filter((participant) => participant.id !== id)) }
            ]
        );
    };

    // Função para renderizar cada item da lista
    const renderParticipant = ({ item, index }) => (
        <View style={styles.participantItem}>
            <Text style={styles.participantText}>{index + 1}. {item.name}</Text>
            <TouchableOpacity onPress={() => removeParticipant(item.id)} style={styles.removeButton}>
                <Icon name="times" size={20} color="#cc3333" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {participants.length > 0 ? (
                <FlatList
                    data={participants}
                    renderItem={renderParticipant}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Não há participantes no campeonato.</Text>
                </View>
            )}

            {/* Botão de Adicionar Participante sempre visível */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                    navigation.navigate('AdicionarParticipante', { addParticipant }) // Passa a função para a tela Adicionar
                }
            >
                <Text style={styles.addButtonText}>Adicionar Participante</Text>
            </TouchableOpacity>

            <View style={styles.bottomMenu}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('CriarCampeonato')}
                >
                    <Icon name="trophy" size={20} color="#ffffff" />
                    <Text style={styles.menuButtonText}>Painel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Participante')}
                >
                    <Icon name="users" size={20} color="#cc3333" />
                    <Text style={styles.menuButtonText}>Participantes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Chaveamento')}
                >
                    <Icon name="align-left" size={20} color="#ffffff" />
                    <Text style={styles.menuButtonText}>Chaves</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 10,
    },
    participantItem: {
        backgroundColor: '#cc3333',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    participantText: {
        color: '#ffffff',
        fontSize: 16,
    },
    removeButton: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#ffffff',
        fontSize: 15,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#555',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#1a1a1a',
        borderTopWidth: 1,
        borderTopColor: '#555',
    },
    menuButton: {
        alignItems: 'center',
    },
    menuButtonText: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default Participantes;
