import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function AdminScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Tentando logar com:', username, password); // Verifica o que está sendo passado
    if (username === 'admin' && password === 'admin123') {
      navigation.navigate('Campeonato'); // Redireciona para a tela do Campeonato
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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

      <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#ccc" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#ccc" secureTextEntry value={password} onChangeText={setPassword} />

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.registerLink}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.copyrightText}>Todos os direitos reservados &copy; {new Date().getFullYear()}</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  logoContainer: { flexDirection: 'column', alignItems: 'center', marginBottom: 20 },
  logoSquareRow: { flexDirection: 'row' },
  logoSquareRed: { width: 30, height: 30, backgroundColor: '#cc3333', margin: 2 },
  logoSquareGray: { width: 30, height: 30, backgroundColor: '#cccccc', margin: 2 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 5, textAlign: 'center' },
  logoHighlight: { color: '#cc3333' },
  adminLink: { color: '#cccccc', fontSize: 14, marginBottom: 20 },
  input: { width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: '#555', marginBottom: 20, color: '#ffffff', fontSize: 16 },
  forgotPasswordContainer: { width: '100%', alignItems: 'flex-start', marginBottom: 20 },
  forgotPassword: { color: '#cccccc', fontSize: 14 },
  loginButton: { backgroundColor: '#cc3333', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 5 },
  loginButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  registerLink: { color: '#cc3333', fontSize: 14, marginTop: 20, textDecorationLine: 'underline' },
  copyrightText: { color: '#cccccc', fontSize: 12, position: 'absolute', bottom: 20 },
});
