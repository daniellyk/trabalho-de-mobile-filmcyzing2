import { Image, StyleSheet, View } from 'react-native'; // Importando Image

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/hq720.jpg')}
      />
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>

      <ThemedText type='title' style={styles.headerText}>
        O Gabinete do Dr. Caligari
      </ThemedText>

      <center> <ThemedText type="subtitle">Informações Gerais</ThemedText></center>
      <ThemedText> Lançamento: 26 de fevereiro de 1920 </ThemedText>
      <ThemedText> Gênero: Horror, Mudo, Terror (Expressionismo Alemão)</ThemedText>
      <ThemedText> Diretor: Robert Wiene </ThemedText>
      <ThemedText> Roteiro: Hans Janowitz e Carl Mayer </ThemedText>
      <ThemedText> Duração: Aproximadamente 77 minutos </ThemedText>
      <ThemedText> Faturamento: 18.000 USD </ThemedText>
      <ThemedText> Onde Assistir: Telecine, Amazon Prime </ThemedText>
      <ThemedText />
      <center> <ThemedText type="subtitle">Sinopse</ThemedText></center>
      <ThemedText> A história é contada do ponto de vista de Francis, um jovem que perdeu seu melhor amigo e suspeita que o Dr. Caligari e Cesare estão por trás dos crimes. À medida que Francis investiga, a linha entre a realidade e o delírio começa a se desvanecer, levando o espectador a questionar tudo o que vê na tela.

        O que torna "O Gabinete do Dr. Caligari" único não é apenas o enredo, mas a forma como ele é apresentado. O filme é uma obra-prima do expressionismo alemão, usando cenários distorcidos, ângulos de câmera incomuns e uma estética visual que reflete o estado mental perturbado dos personagens e o terror da história. </ThemedText>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2D2828'
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#2D2828'
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#800000',
    textAlign: 'center',
    marginTop: 20,
  },

  reactLogo: {
    height: 280,
    width: 550,
    bottom: 0,
    left: 0,
    position: 'absolute',

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});