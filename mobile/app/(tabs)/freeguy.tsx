import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native'; // Importar ScrollView para permitir rolagem se o conteúdo for grande

export default function HomeScreen() {
  return (
    // Envolver tudo em ScrollView para garantir que o conteúdo seja rolável se for maior que a tela
    <ScrollView style={styles.container}>
      
      {/* Título Principal */}
      <ThemedText style={styles.headerText}>
        FREE GUY
      </ThemedText>

      {/* Contêiner para a Imagem e as Informações Gerais - Disposição lado a lado (row) */}
      <View style={styles.infoRowContainer}>
        
        {/* Imagem (Pôster) */}
        <Image
          style={styles.posterImage}
          source={require('@/assets/images/Chris.jpg')}
        />

        {/* Informações Gerais */}
        <View style={styles.generalInfoContainer}>
          <ThemedText type="subtitle" style={styles.subtitleCentered}>
            Informações Gerais
          </ThemedText>
          <ThemedText style={styles.infoText}>Lançamento: 19 de agosto de 2021</ThemedText>
          <ThemedText style={styles.infoText}>Gênero: Comédia, Ficção Científica e Ação</ThemedText>
          <ThemedText style={styles.infoText}>Diretor: Shawn Levy</ThemedText>
          <ThemedText style={styles.infoText}>Roteiro: Matt Lieberman e Zak Penn</ThemedText>
          <ThemedText style={styles.infoText}>Duração: 1 hora e 55 minutos</ThemedText>
          <ThemedText style={styles.infoText}>Orçamento: US$ 331,5 milhões</ThemedText>
          <ThemedText style={styles.infoText}>Distribuição: 20th Century Studios</ThemedText>
          <ThemedText style={styles.infoText}>Onde Assistir: Star+, Disney+</ThemedText>
        </View>
      </View>

      {/* Sinopse */}
      <View style={styles.synopsisContainer}>
        <ThemedText type="subtitle" style={styles.subtitleCentered}>
          Sinopse
        </ThemedText>
        <ThemedText style={styles.synopsisText}>
          {`Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando descobre que é um personagem em um jogo interativo. Ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.
O filme se torna uma corrida contra o tempo, onde Guy precisa se tornar o herói que ele sempre quis ser para salvar o seu mundo, enquanto Millie e Keys lutam para provar que Antwan roubou o código. É uma história que mistura ação, comédia e romance, explorando a ideia de ter controle sobre a própria vida.`}
        </ThemedText>
      </View>

      {/* Elementos originais não utilizados, mas mantidos os estilos de contêineres vazios */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10, // Adicionar padding para evitar que o conteúdo toque as bordas
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  // Novo contêiner para dispor a imagem e as informações lado a lado
  infoRowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alinha os itens ao topo
    marginBottom: 20,
    gap: 10, // Espaçamento entre a imagem e o texto
  },

  posterImage: {
    width: 150, // Tamanho menor e fixo para caber ao lado do texto
    height: 225, // Proporção de pôster 2:3 (aproximadamente)
    resizeMode: 'cover',
    borderRadius: 8,
  },

  generalInfoContainer: {
    flex: 1, // Permite que este contêiner ocupe o espaço restante
    paddingLeft: 5,
  },

  subtitleCentered: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Cor clara para o subtítulo
  },

  infoText: {
    fontSize: 14,
    color: '#CCCCCC', // Cor clara para as informações
    marginBottom: 2,
  },

  synopsisContainer: {
    marginBottom: 20,
  },

  synopsisText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
    textAlign: 'justify',
    paddingHorizontal: 5,
  },

  // Estilos originais (ajustados para serem menos conflitantes se necessário)
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#000000', // Mudei para evitar cor de fundo desnecessária
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#000000', // Mudei para evitar cor de fundo desnecessária
  },

  // Removido o estilo 'tinyLogo' e 'reactLogo' pois foram substituídos/não utilizados
});