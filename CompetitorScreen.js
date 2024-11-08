import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CompetitorScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Competidores predefinidos
  const competitors = [
    { username: 'admin', password: 'admin123' },
    { username: 'Vinicius', password: 'Vinicius123' },
    { username: 'Felipe', password: 'Felipe123' },
    { username: 'Alvaro123', password: 'Alvaro123' },
    { username: 'Samuca', password: 'Samuca123' },
  ];

  const handleLogin = () => {
    // Verifica se o nome de usuário e a senha correspondem a um competidor predefinido
    const competitor = competitors.find(
      (competitor) => competitor.username === username && competitor.password === password
    );

    if (competitor) {
      // Caso o login seja bem-sucedido, navega para a tela do campeonato
      navigation.navigate('HomeCompetidor');
    } else {
      // Exibe um alerta caso o login seja falho
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoSquareRow}>
          <View style={styles.logoSquareRed} />
          <View style={styles.logoSquareGray} />
        </View>
        <View style={styles.logoSquareRow}>
          <View style={styles.logoSquareGray} />
          <View style={styles.logoSquareRed} />
        </View>
      </View>
      <Text style={styles.logoText}>
        Checkers <Text style={styles.logoHighlight}>Champions</Text>
      </Text>
      <Text style={styles.adminLink}>By Urubu Studios</Text>

      {/* Formulário de Login */}
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="#ccc"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Cadastro')}>
          Crie sua conta
        </Text>
      </Text>

      <Text style={styles.copyrightText}>Todos os direitos reservados &copy; {new Date().getFullYear()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoSquareRow: {
    flexDirection: 'row',
  },
  logoSquareRed: {
    width: 30,
    height: 30,
    backgroundColor: '#cc3333',
    margin: 2,
  },
  logoSquareGray: {
    width: 30,
    height: 30,
    backgroundColor: '#cccccc',
    margin: 2,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
  },
  logoHighlight: {
    color: '#cc3333',
  },
  adminLink: {
    color: '#cccccc',
    fontSize: 14,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    marginBottom: 20,
    color: '#ffffff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#cc3333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    color: '#cccccc',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#cc3333',
    fontSize: 16,
  },
  copyrightText: {
    color: '#cccccc',
    fontSize: 12,
    position: 'absolute',
    bottom: 20,
  },
});
