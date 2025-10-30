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
        FREE GUY
      </ThemedText>

      <View style={styles.contentRow}>

        <View style={styles.posterColumn}>
          <Image
            style={styles.moviePoster} 
            source={require('@/assets/images/Chris.jpg')} 
            resizeMode="cover"
          />
        </View>

        <View style={styles.detailsColumn}>
          <View style={styles.detailsHeader}>
             <ThemedText type="subtitle">Informações Gerais</ThemedText>
          </View>
         
          <ThemedText style={styles.infoText}>Lançamento 19 de agosto de 2021</ThemedText>
          <ThemedText style={styles.infoText}>Diretor Shawn Levy</ThemedText>
          <ThemedText style={styles.infoText}>Roteiro Matt Lieberman e Zak Penn</ThemedText>
          <ThemedText style={styles.infoText}>Gêneros Comédia, Ficção Científica, Ação</ThemedText>
          <ThemedText style={styles.infoText}>Duração 1 hora e 55 minutos</ThemedText>
          <ThemedText style={styles.infoText}>Orçamento 100 milhões USD </ThemedText>
          <ThemedText style={styles.infoText}>Distribuição 20th Century Studios </ThemedText>
          <ThemedText style={styles.infoText}>Onde Assistir Star+, Disney+</ThemedText>
        </View>
      </View>

      <View style={styles.synopsisHeader}>
         <ThemedText type="subtitle">Sinopse</ThemedText>
      </View>
      
      <ThemedText style={styles.synopsisText}>
        Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando descobre que é um personagem em um jogo interativo. Ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo. O filme se torna uma corrida contra o tempo, onde Guy precisa se tornar o herói que ele sempre quis ser para salvar o seu mundo, enquanto Millie e Keys lutam para provar que Antwan roubou o código. É uma história que mistura ação, comédia e romance, explorando a ideia de ter controle sobre a própria vida.
      </ThemedText>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 15,
    paddingBottom: 40,
  },

  headerText: {
    paddingVertical: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  contentRow: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
    alignItems: 'flex-start',
  },

  posterColumn: {
    width: '40%',
    alignItems: 'center',
    paddingRight: 10,
  },

  detailsColumn: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: 'flex-start',
  },

  moviePoster: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },

  detailsHeader: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  
  synopsisHeader: {
    alignItems: 'center',
    marginVertical: 15,
  },

  synopsisText: {
    marginTop: 5,
    lineHeight: 24,
    fontSize: 16,
    color: '#CCCCCC',
  },

  infoText: {
    marginBottom: 6,
    fontSize: 14,
    color: '#F0F0F0',
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
});