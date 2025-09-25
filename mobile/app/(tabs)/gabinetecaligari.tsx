import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';



export default function HomeScreen() {
            <ParallaxScrollView
               
                headerImage={<Image
                    source={require('@/assets/images/hq720.jpg')}
                    style={styles.reactLogo} />} headerBackgroundColor={{
                        dark: '#fff',
                        light: '#fff'
                    }}            >
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">O Gabinete do Dr. Caligari</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Informações gerais</ThemedText>
                    <ThemedText>Lançamento: 26 de fevereiro de 1920.</ThemedText>
                    <ThemedText>Diretor: Robert Wiene.</ThemedText>
                    <ThemedText>Gênero: Horror, Mudo, Terror.</ThemedText>
                    <ThemedText>Roteiro: Hans Janowitz e Carl Mayer.</ThemedText>
                    <ThemedText>Duração: Aproximadamente 77 minutos.</ThemedText>
                    <ThemedText>Faturamento: 18.000 USD</ThemedText>
                    <ThemedText>Disponível em: Telecine e Amazon Prime.</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Sinopse</ThemedText>
                    <ThemedText> A história é contada do ponto de vista de Francis, um jovem que perdeu seu melhor amigo e suspeita que o Dr. Caligari e Cesare estão por trás dos crimes.
                         À medida que Francis investiga, a linha entre a realidade e o delírio começa a se desvanecer, levando o espectador a questionar tudo o que vê na tela.</ThemedText>
                </ThemedView>
            </ParallaxScrollView>
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
        height: 300,
        width: 400,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});


