import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

<Image
        style={styles.tinylogo}
        source={require('@/assets/images/ouijaorigem.jpeg')}
      />
  
      <ThemedText type='title' style={styles.headerText}>
        Ouija: A origem do Mal
      </ThemedText>

      <ThemedText>                                        </ThemedText>
      <center><ThemedText type="subtitle">Informações Gerais</ThemedText></center>
                <ThemedText> Lançamento: 20 de outubro de 2016.</ThemedText>
                <ThemedText> Gênero: Terror, drama e suspense. </ThemedText>
                <ThemedText> Diretor: Mike Flanagan. </ThemedText>
                <ThemedText> Duração: 1h 39min. </ThemedText>
                <ThemedText> Faturamento: 81,7 milhões de dólares. </ThemedText>
                <ThemedText> Distribuição: Universal Pictures. </ThemedText>
                <ThemedText>Onde Assistir: Amazon prime, YouTube e Apple TV alugar ou comprar. </ThemedText>
                
                <ThemedText>                                        </ThemedText>
                <center><ThemedText type="subtitle">Sinopse</ThemedText></center>
                <ThemedText>Em 1967, uma médium-golpista com suas duas filhas fazem farsas de contatos com o além. Para melhorar a qualidade 
                  dos golpes, a mãe decide comprar um tabuleiro Ouija e, numa brincadeira, acaba descobrindo que sua filha caçula Doris tem o 
                  dom de falar com espíritos. Ao tentar invocar o espírito do pai, a garotinha acaba atraindo outros espíritos, mas a filha mais 
                  nova, transformando a tentativa de ganho financeiro num pesadelo de possessão que ameaça a família e exige um exorcismo.</ThemedText>
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

  },
  tinylogo: {
    width: 50,
    height: 50,
  },
  },
);