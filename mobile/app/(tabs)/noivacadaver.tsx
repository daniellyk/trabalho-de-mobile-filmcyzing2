import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/Noivacadaver2.jpg')}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
  
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>
  
      <ThemedText style={styles.headerText}>
      Noiva Cadarver
      </ThemedText>
       <ThemedText>                                        </ThemedText>
      <center><ThemedText type="subtitle">Informações Gerais</ThemedText></center>
              <ThemedText>Data de lançamento: 21 de outubro de 2005 (Brasil)</ThemedText>
              <ThemedText>Diretores: Tim Burton, Mike Johnson</ThemedText>
              <ThemedText>Autores: Tim Burton, Carlos Grangel</ThemedText>
              <ThemedText>Gêneros: Animação, Romance, Drama, Ficção científica.</ThemedText>
              <ThemedText>Roteiro: Caroline Thompson, John August, Pamela Pettler</ThemedText>
              <ThemedText>Orçamento: 40 milhões USD </ThemedText>
              
              <ThemedText>                                        </ThemedText>
                <center><ThemedText type="subtitle">Sinopse</ThemedText></center>
                <ThemedText> As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.</ThemedText>
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
    color: '#1D1D3D', 
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