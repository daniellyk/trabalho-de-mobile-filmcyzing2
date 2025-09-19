import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Filme trabalho mobile.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Noiva Cadaver</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
       
                <ThemedText type="subtitle">Informações Gerais</ThemedText>
                <ThemedText> Lançamento: 21 de outubro de 2005 (Brasil)</ThemedText>
                <ThemedText> Gênero: Romance, Drama, Fantasia, Melodrama</ThemedText>
                <ThemedText> Diretores: Tim Burton, Mike Johnson </ThemedText>
                <ThemedText> Roteiro: Caroline Thompson, John August</ThemedText>
                <ThemedText> Duração: 1h 17m </ThemedText>
                <ThemedText> Orçamento: 40 milhões USD </ThemedText>
                <ThemedText> Distribuição: Warner Bros. Entertainment</ThemedText>
                <ThemedText> Onde Assistir: Amazon e Apple tv</ThemedText>
                <ThemedText /> <ThemedText>


        <ThemedText></ThemedText>
     <ThemedText type="defaultSemiBold">
    </ThemedText>
         {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
         </ThemedText>{' '}
         
          </ThemedText>
         </ThemedView>
         <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sinopse:</ThemedText>
        <ThemedText>As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis. </ThemedText>


      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
         
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
   );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width:400,
    bottom:0,
    left: 0,
    position: 'absolute',
  },
});
