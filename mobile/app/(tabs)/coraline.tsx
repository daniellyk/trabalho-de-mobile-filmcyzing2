import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/coraline.jpg')}
      />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.headerText}>
        CORALINE
      </ThemedText>
      <ThemedText>                                                     </ThemedText>
      <center> <ThemedText type="subtitle">Informações Gerais:</ThemedText></center>
      <ThemedText>                                                     </ThemedText>
      <ThemedText> Lançamento:  13 de fevereiro de 2009 (Brasil). </ThemedText>
      <ThemedText> Diretor: Henry Selick. </ThemedText>
      <ThemedText> Autor: Neil Gaiman. </ThemedText>
      <ThemedText> Gêneros: Animação e terror. </ThemedText>
      <ThemedText> Roteiro: Henry Selick.</ThemedText>
      <ThemedText> Duração: 1h 40m.</ThemedText>
      <ThemedText> Orçamento: 60 milhões USD.</ThemedText>
      <ThemedText />
      <ThemedText>                                                      </ThemedText>
      <center> <ThemedText type="subtitle">Sinopse:</ThemedText></center>
      <ThemedText>                                                      </ThemedText>
      <ThemedText> Coraline descobre uma porta para um mundo alternativo onde tudo parece perfeito, pais afetuosos e desejos realizados. Porém todos têm botões nos olhos, e logo percebe que essa realidade paralela esconde intenções sombrias para mantê-la presa.
        A mensagem principal de Coraline é que um mundo aparentemente perfeito, mas artificial, é inferior à complexidade da vida real, que, apesar de suas imperfeições e frustrações, é o lar de verdadeiras relações familiares e felicidade, que podem ser perdidas ao desejar algo que não se tem.</ThemedText>

      <center><ThemedText type="subtitle">Informações gerais:</ThemedText></center>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>
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
    backgroundColor: '#FFFFFF'
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#2D2828'
  },
  
  headerText: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#32327c',
    textAlign: 'center',
    marginTop: 20,
    
  },
  
  tinyLogo: {
  },
  
  reactLogo: {
    height: 280,
    width: 550,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
    