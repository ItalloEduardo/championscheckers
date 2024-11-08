import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function LoginScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const colorAnim = new Animated.Value(0); // Para animação de cor

  // Iniciar a animação
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Iniciar a animação de cores
    const animateColors = () => {
      colorAnim.setValue(0);
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false, // Precisamos de false para animar cores
      }).start(() => animateColors()); // Chama a animação novamente ao terminar
    };

    animateColors();
  }, [fadeAnim, colorAnim]);

  // Interpolação para as cores
  const redColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#cc3333', '#cccccc'], // Alternando de vermelho para cinza
  });

  const grayColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#cccccc', '#cc3333'], // Alternando de cinza para vermelho
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoSquareRow}>
            <Animated.View style={[styles.logoSquare, { backgroundColor: redColor }]} />
            <Animated.View style={[styles.logoSquare, { backgroundColor: grayColor }]} />
          </View>
          <View style={styles.logoSquareRow}>
            <Animated.View style={[styles.logoSquare, { backgroundColor: grayColor }]} />
            <Animated.View style={[styles.logoSquare, { backgroundColor: redColor }]} />
          </View>
        </View>
        <Text style={styles.logoText}>Checkers <Text style={styles.logoHighlight}>Champions</Text></Text>
        {/* By Urubu Studios abaixo do logotipo */}
        <Text style={styles.byUrubuText}>By Urubu Studios</Text>
      </Animated.View>

      {/* Contêiner para os botões */}
      <View style={styles.buttonContainer}>
        {/* Troque a ordem dos botões aqui */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin')}>
          <Text style={styles.buttonText}>Entrar como Administrador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Competitor')}>
          <Text style={styles.buttonText}>Entrar como Competidor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <Text style={styles.copyrightText}>Todos os direitos reservados &copy; {new Date().getFullYear()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', alignItems: 'center', justifyContent: 'center', padding: 20 },
  logoContainer: { flexDirection: 'column', alignItems: 'center', marginBottom: 20 },
  logoSquareRow: { flexDirection: 'row' },
  logoSquare: { width: 30, height: 30, margin: 2 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 5, textAlign: 'center' },
  logoHighlight: { color: '#cc3333' },
  byUrubuText: { color: '#cccccc', fontSize: 14 },
  buttonContainer: { marginTop: 30, width: '100%' },
  button: { backgroundColor: '#cc3333', paddingVertical: 10, marginVertical: 5, borderRadius: 5 },
  buttonText: { textAlign: 'center', fontSize: 16, color: '#fff' },
  copyrightText: { color: '#cccccc', fontSize: 12, position: 'absolute', bottom: 20 },
});
