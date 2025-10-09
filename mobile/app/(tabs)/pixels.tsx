import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/Miguel.webp')}
      />
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>


      <ThemedText style={styles.headerText}>
        Pixels
      </ThemedText>

     <center><ThemedText type="subtitle">Informações Gerais</ThemedText></center>
      <ThemedText> Lançamento:  23 de julho de 2015 Brasil. </ThemedText>
      <ThemedText> Gênero: Ação, comédia e ficção científica. </ThemedText>
      <ThemedText> diretor: Chris Columbus. </ThemedText>
      <ThemedText> Roteiro: Patrick Jean, Tim Herlihy, Timothy Dowling e Adam Sandler. </ThemedText>
      <ThemedText> Duração:  1 hora 45 minutos </ThemedText>
      <ThemedText> Orçamento: US$ 88–129 milhões. </ThemedText>
      <ThemedText>Onde Assistir: HBO, Google play e Apple TV+</ThemedText>
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
    backgroundColor: '000000',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '000000'
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '000000'
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 20,
  },

  tinyLogo: {
    height: 280,
    width: 550,
  },
});
