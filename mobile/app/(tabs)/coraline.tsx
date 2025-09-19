
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
          source={require('@/assets/images/coraline2.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Coraline</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Informações gerais:</ThemedText>
        <ThemedText>
        <ThemedText> Lançamento:  19 de agosto de 2021 </ThemedText>
                <ThemedText> Gênero: Comédia, Ficção Científica e Ação </ThemedText>
                <ThemedText> diretor: Shawn Levy </ThemedText>
                <ThemedText> Roteiro: Matt Lieberman e Zak Penn </ThemedText>
                <ThemedText> Duração: 1 hora e 55 minutes </ThemedText>
                <ThemedText> Orçamento:   </ThemedText>
                <ThemedText> Distribuição: Focus Features e a Paramount Pictures nos EUA. No Brasil, o filme da Laika foi distribuído pela Universal.  </ThemedText>
                <ThemedText> Onde Assistir: Amazon prime video, Google play filmes e Youtube.</ThemedText>
                <ThemedText></ThemedText>
          {' '}
          <ThemedText type="default">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sinopse:</ThemedText>
        <ThemedText>
          {`Coraline descobre uma porta para um mundo alternativo onde tudo parece perfeito, pais afetuosos e desejos realizados. Porém todos têm botões nos olhos, e logo percebe que essa realidade paralela esconde intenções sombrias para mantê-la presa.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          <ThemedText type="default">A mensagem principal de Coraline é que um mundo aparentemente perfeito, mas artificial, é inferior à complexidade da vida real, que, apesar de suas imperfeições e frustrações, é o lar de verdadeiras relações familiares e felicidade, que podem ser perdidas ao desejar algo que não se tem. </ThemedText>{' '}
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
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },


});

