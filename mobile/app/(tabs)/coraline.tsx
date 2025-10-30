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
        CORALINE
      </ThemedText>


      <View style={styles.contentRow}>


        <View style={styles.posterColumn}>
          <Image
            style={styles.tinyLogo}
            source={require('@/assets/images/images (2).jpg')}
          />
        </View>


        <View style={styles.detailsColumn}>
          <center> <ThemedText type="subtitle">Informações Gerais:</ThemedText></center>
          <ThemedText>                                             </ThemedText>
          <ThemedText> Lançamento:  13 de fevereiro de 2009 (Brasil).  </ThemedText>
          <ThemedText> Diretor: Henry Selick. </ThemedText>
          <ThemedText> Autor: Neil Gaiman.</ThemedText>
          <ThemedText> Gêneros: Animação e terror. </ThemedText>
          <ThemedText> Roteiro: Henry Selick.</ThemedText>
          <ThemedText> Orçamento: 60 milhões USD. </ThemedText>
          <ThemedText> Duração: 1h 40m </ThemedText>
          <ThemedText />
        </View>
      </View>


      <center> <ThemedText type="subtitle">Sinopse:</ThemedText></center>
      <ThemedText>                                                </ThemedText>
      <ThemedText> Coraline descobre uma porta para um mundo alternativo onde tudo parece perfeito, pais afetuosos e desejos realizados. Porém todos têm botões nos olhos, e logo percebe que essa realidade paralela esconde intenções sombrias para mantê-la presa.</ThemedText>
      <ThemedText>                                                </ThemedText>
      <ThemedText> A mensagem principal de Coraline é que um mundo aparentemente perfeito, mas artificial, é inferior à complexidade da vida real, que, apesar de suas imperfeições e frustrações, é o lar de verdadeiras relações familiares e felicidade, que podem ser perdidas ao desejar algo que não se tem. </ThemedText>


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
    color: '#4e4890',
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
    width: 300,
    height: 250,
    resizeMode: 'contain'
   
  },
});

    