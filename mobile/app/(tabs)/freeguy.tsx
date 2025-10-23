import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (

    
    <ScrollView style={styles.container}>
      
      
      <ThemedText style={styles.headerText}>
        FREE GUY
      </ThemedText>


      <center><ThemedText type="subtitle">Informações Gerais</ThemedText></center>
      p<ThemedText> Lançamento:  19 de agosto de 2021 </ThemedText>
      <ThemedText> Gênero: Comédia, Ficção Científica e Ação </ThemedText>
      <ThemedText> diretor: Shawn Levy </ThemedText>
      <ThemedText> Roteiro: Matt Lieberman e Zak Penn </ThemedText>
      <ThemedText> Duração: 1 hora e 55 minutes </ThemedText>
      <ThemedText> Orçamento: US$ 331,5 milhões </ThemedText>
      <ThemedText> Distribuição:  20th Century Studios </ThemedText>
      <ThemedText>Onde Assistir: Star+  Disney+</ThemedText>

      <ThemedText>
        <center><ThemedText type="subtitle">Sinopse</ThemedText></center>
        {`Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando descobre que é um personagem em um jogo interativo. Ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.
O filme se torna uma corrida contra o tempo, onde Guy precisa se tornar o herói que ele sempre quis ser para salvar o seu mundo, enquanto Millie e Keys lutam para provar que Antwan roubou o código. É uma história que mistura ação, comédia e romance, explorando a ideia de ter controle sobre a própria vida.
`}
      </ThemedText>

    </ScrollView>

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
    color: '#FFD700',
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

  tinyLogo:{
    width:300,
    height: 200
  }

});