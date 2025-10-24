import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

interface MovieData {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  genre: string;
  director: string;
  screenplay: string;
  duration: string;
  budget: string;
  distribution: string;
  whereToWatch: string;
  synopsis: string;
}

export default function HomeScreen() {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      // Tente estas URLs (altere conforme seu ambiente)
      const API_URL = 'http://10.0.2.2:3000/movies/1'; // Para Android Emulator
      // const API_URL = 'http://localhost:3000/movies/1'; // Para iOS Simulator
      // const API_URL = 'http://192.168.1.100:3000/movies/1'; // Para dispositivo físico (substitua pelo SEU IP)

      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error('Falha ao carregar dados');
      }
      
      const data: MovieData = await response.json();
      setMovieData(data);
    } catch (error) {
      console.log('Erro ao carregar dados da API, usando dados locais:', error);
      // Em caso de erro, usa dados locais como fallback
      setMovieData({
        id: 1,
        title: "Pixels",
        poster: "",
        releaseDate: "23 de julho de 2015 Brasil",
        genre: "Ação, comédia e ficção científica",
        director: "Chris Columbus",
        screenplay: "Patrick Jean, Tim Herlihy, Timothy Dowling e Adam Sandle",
        duration: "1 hora 45 minutos",
        budget: "US$ 88–129 milhões",
        distribution: "Sony Pictures Releasing",
        whereToWatch: "HBO, Google play e Apple TV+",
        synopsis: "Em busca de contato com seres extraterrestres, a humanidade envia imagens e sons variados sobre sua própria cultura nos mais diversos satélites lançados ao espaço. Após encontrar um desses registros, uma raça alienígena resolve criar monstros digitais inspirados em videogames clássicos dos anos 1980 e tentar conquistar a Terra. Para combatê-los, um grupo de especialistas em jogos da época é convocado e encarregado de derrotar os invasores, salvando assim o planeta."
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ThemedText style={styles.loadingText}>Carregando...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.headerText}>
        {movieData?.title || "Pixels"}
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
          <ThemedText style={styles.infoText}>Lançamento: {movieData?.releaseDate}</ThemedText>
          <ThemedText style={styles.infoText}>Gênero: {movieData?.genre}</ThemedText>
          <ThemedText style={styles.infoText}>Diretor: {movieData?.director}</ThemedText>
          <ThemedText style={styles.infoText}>Roteiro: {movieData?.screenplay}</ThemedText>
          <ThemedText style={styles.infoText}>Duração: {movieData?.duration}</ThemedText>
          <ThemedText style={styles.infoText}>Orçamento: {movieData?.budget}</ThemedText>
          <ThemedText style={styles.infoText}>Distribuição: {movieData?.distribution}</ThemedText>
          <ThemedText style={styles.infoText}>Onde Assistir: {movieData?.whereToWatch}</ThemedText>
        </View>
      </View>

      <View style={styles.synopsisContainer}>
        <ThemedText type="subtitle" style={styles.subtitleCentered}>
          Sinopse
        </ThemedText>
        <ThemedText style={styles.synopsisText}>
          {movieData?.synopsis || `Em busca de contato com seres extraterrestres, a humanidade envia imagens e sons variados sobre sua própria cultura nos mais diversos satélites lançados ao espaço. Após encontrar um desses registros, uma raça alienígena resolve criar monstros digitais inspirados em videogames clássicos dos anos 1980 e tentar conquistar a Terra. Para combatê-los, um grupo de especialistas em jogos da época é convocado e encarregado de derrotar os invasores, salvando assim o planeta.`}
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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
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