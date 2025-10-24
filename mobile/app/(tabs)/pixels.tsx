import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
  return (

    <ScrollView style={styles.container}>


      <ThemedText style={styles.headerText}>
        Pixels
      </ThemedText>


      <View style={styles.infoRowContainer}>

        <Image
          style={styles.posterImage}
          source={require('@/assets/images/miguel.jpg')}
        />

        <View style={styles.generalInfoContainer}>
          <ThemedText type="subtitle" style={styles.subtitleCentered}>
            Informações Gerais
          </ThemedText>
          <ThemedText style={styles.infoText}>Lançamento: 23 de julho de 2015 Brasil.</ThemedText>
          <ThemedText style={styles.infoText}>Gênero: Ação, comédia e ficção científica.</ThemedText>
          <ThemedText style={styles.infoText}>Diretor: Chris Columbus.</ThemedText>
          <ThemedText style={styles.infoText}>Roteiro: Patrick Jean, Tim Herlihy, Timothy Dowling e Adam Sandle</ThemedText>
          <ThemedText style={styles.infoText}>Duração: 1 hora 45 minutos.</ThemedText>
          <ThemedText style={styles.infoText}>Orçamento: US$ 88–129 milhões</ThemedText>
          <ThemedText style={styles.infoText}>Distribuição: Sony Pictures Releasing.</ThemedText>
          <ThemedText style={styles.infoText}>Onde Assistir:  HBO, Google play e Apple TV+.</ThemedText>
        </View>
      </View>


      <View style={styles.synopsisContainer}>
        <ThemedText type="subtitle" style={styles.subtitleCentered}>
          Sinopse
        </ThemedText>
        <ThemedText style={styles.synopsisText}>
          {`Em busca de contato com seres extraterrestres, a humanidade envia imagens e sons variados sobre sua própria cultura nos mais diversos satélites lançados ao espaço. Após encontrar um desses registros, uma raça alienígena resolve criar monstros digitais inspirados em videogames clássicos dos anos 1980 e tentar conquistar a Terra. Para combatê-los, um grupo de especialistas em jogos da época é convocado e encarregado de derrotar os invasores, salvando assim o planeta.`}
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
    color: '#FFD700',
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