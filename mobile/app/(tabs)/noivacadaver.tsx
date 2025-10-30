
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>

      <ThemedText type='title' style={styles.headerText}>
        Noiva Cadáver
      </ThemedText>

      <View style={styles.contentRow}>

        <View style={styles.posterColumn}>
          <Image
            style={styles.tinyLogo}
            source={require('@/assets/images/Noiva2.jpg')}
          />
        </View>

        <View style={styles.detailsColumn}>
          <center> <ThemedText type="subtitle">Informações Gerais</ThemedText></center>
          <ThemedText> Data de lançamento: 21 de outubro de 2005 (Brasil)</ThemedText>
          <ThemedText> Diretores: Tim Burton, Mike Johnson</ThemedText>
          <ThemedText> Autores: Tim Burton, Carlos Grangel</ThemedText>
          <ThemedText> Gêneros: Animação, Romance, Drama, Ficção científica.</ThemedText>
          <ThemedText> Roteiro: Caroline Thompson, John August, Pamela Pettler</ThemedText>
          <ThemedText> Orçamento: 40 milhões USD </ThemedText>
          <ThemedText />
        </View>
      </View>

      <center> <ThemedText type="subtitle">Sinopse</ThemedText></center>
      <ThemedText> As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.</ThemedText>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 10,
    paddingBottom: 20,
  },

  contentRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  posterColumn: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 10,
  },

  detailsColumn: {
    flex: 2,
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#2D2828'
  },

  headerText: {
    padding: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B5C82', 
    textAlign: 'center',
    marginTop: 20,
  },

  reactLogo: {
    height: 280,
    width: 550,
    bottom: 0,
    left: 0,
    position: 'absolute',

  }, tinyLogo: {
    width: 220, 
    height: 210, 
    resizeMode: 'contain'
    
  },
});