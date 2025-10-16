import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    
    <ScrollView style={styles.container}>
      
      
      <ThemedText style={styles.headerText}>
        Ouija: A Origem do Mal
      </ThemedText>

    
      <View style={styles.infoRowContainer}>
        
      
        <Image
          style={styles.posterImage}
          source={require('@/assets/images/ouija-movie-poster1.png')}
        />

        <View style={styles.generalInfoContainer}>
          <ThemedText type="subtitle" style={styles.subtitleCentered}>
            Informações Gerais
          </ThemedText>
          <ThemedText style={styles.infoText}>Lançamento: 20 de outubro de 2016.</ThemedText>
          <ThemedText style={styles.infoText}>Gênero: Terror, drama e suspense. o</ThemedText>
          <ThemedText style={styles.infoText}>Diretor: Mike Flanagan.</ThemedText>
          <ThemedText style={styles.infoText}>Duração: 1h 39min.</ThemedText>
          <ThemedText style={styles.infoText}>Faturamento: 81,7 milhões de dólares.</ThemedText>
          <ThemedText style={styles.infoText}>Distribuição: Universal Pictures. </ThemedText>
          <ThemedText style={styles.infoText}>Onde Assistir: Amazon prime, YouTube e Apple TV alugar ou comprar.</ThemedText>
        </View>
      </View>


      <View style={styles.synopsisContainer}>
        <ThemedText type="subtitle" style={styles.subtitleCentered}>
          Sinopse
        </ThemedText>
        <ThemedText style={styles.synopsisText}>
          {`Em 1967, uma médium-golpista com suas duas filhas fazem farsas de contatos com o além. Para melhorar a qualidade
                  dos golpes, a mãe decide comprar um tabuleiro Ouija e, numa brincadeira, acaba descobrindo que sua filha caçula Doris tem o
                  dom de falar com espíritos. Ao tentar invocar o espírito do pai, a garotinha acaba atraindo outros espíritos, mas a filha mais
                  nova, transformando a tentativa de ganho financeiro num pesadelo de possessão que ameaça a família e exige um exorcismo.`}
        </ThemedText>
      </View>

  
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
    padding: 10, 
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  infoRowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginBottom: 20,
    gap: 10, 
  },

  posterImage: {
    width: 150, 
    height: 225, 
    resizeMode: 'cover',
    borderRadius: 8,
  },

  generalInfoContainer: {
    flex: 1,
    paddingLeft: 5,
  },

  subtitleCentered: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },

  infoText: {
    fontSize: 14,
    color: '#CCCCCC', 
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

  
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#000000', 
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#000000', 
  },


});