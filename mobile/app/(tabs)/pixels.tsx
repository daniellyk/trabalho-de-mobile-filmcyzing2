import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
<<<<<<< HEAD
  return (
        <View style={styles.container}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title"></ThemedText>
          </ThemedView>
    
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle"></ThemedText>
          </ThemedView>

        
      
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#2D2828', 
      },

      titleContainer: {
=======
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/Miguel.webp')}
                    style={styles.reactLogo}
                />
            }>
                    <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Pixels</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Informações Gerais</ThemedText>
                <ThemedText> Gênero: Ação, comédia e ficção científica.</ThemedText>
                <ThemedText> Direção: Chris Columbus. </ThemedText>
                <ThemedText> Roteiro: Patrick Jean, Tim Herlihy, Timothy Dowling e Adam Sandler. </ThemedText>
                <ThemedText> Lançamento:23 de julho de 2015 Brasil. </ThemedText>
                <ThemedText> Duração: 1h 45m. </ThemedText>
                <ThemedText> Orçamento: US$ 88–129 milhões. </ThemedText>
                <ThemedText> Distribuição: Sony Pictures </ThemedText>
                <ThemedText> Disponível em: HBO, Google play e Apple TV+.</ThemedText>
                <ThemedText /> <ThemedText>
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Sinopse</ThemedText>
                <ThemedText>
                    {`Em busca de contato com seres extraterrestres, a humanidade envia imagens e sons variados sobre sua própria cultura nos mais diversos satélites lançados ao espaço. Após encontrar um desses registros, uma raça alienígena resolve criar monstros digitais inspirados em videogames clássicos dos anos 1980 e tentar conquistar a Terra. Para combatê-los, um grupo de especialistas em jogos da época é convocado e encarregado de derrotar os invasores, salvando assim o planeta.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
            </ThemedView>
        </ParallaxScrollView>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
>>>>>>> 41f0fd2552ccc247fec8c041ba1f2a68c5c00a1c
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

      reactLogo: {
        height: 280,
        width: 550,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
    });
