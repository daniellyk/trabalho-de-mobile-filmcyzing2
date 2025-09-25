import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';



export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerImage={<Image
                source={require('@/assets/images/ouija-movie-poster1.png')}
                style={styles.reactLogo} />} headerBackgroundColor={{
                    dark: '#1D3D47',
                    light: '#A1CEDC'
                }}>
                   
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Ouija: a origem do mal</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Informações gerais</ThemedText>
                <ThemedText>Lançamento: 20 de outubro de 2016.</ThemedText>
                <ThemedText>Diretor: Mike Flanagan.</ThemedText>
                <ThemedText>Gênero: Terror, drama, suspense.</ThemedText>
                <ThemedText>Onde assistir: Amazon prime (assinatura), YouTube e Apple TV alugar ou comprar.</ThemedText>
                <ThemedText>Faturamento: Faturou 81,7 milhões de doláres. </ThemedText>
            </ThemedView><ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Sinopse</ThemedText>
                <ThemedText>Em 1967, uma médium-golpista com suas duas filhas fazem farsas de contatos com o além.
                    Para melhorar a qualidade dos golpes, a mãe decide comprar um tabuleiro Ouija e, numa
                    brincadeira, acaba descobrindo que sua filha caçula Doris tem o dom de falar com espíritos. Ao tentar
                    invocar o espírito do pai, a garotinha acaba atraindo outros espíritos, mas a filha mais nova, transformando a
                    tentativa de ganho financeiro num pesadelo de possessão que ameaça a família e exige um exorcismo.  </ThemedText>
            </ThemedView>
            </ParallaxScrollView>
     
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        width: 390,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});


