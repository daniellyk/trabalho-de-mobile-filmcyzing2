import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface MovieData {
  id: number;
  title: string;
  imageUri: string;
}

interface MovieDetailData {
  id: number;
  title: string;
  releaseDate: string;
  genre: string;
  director: string;
  screenwriter: string;
  duration: string;
  revenue: string;
  whereToWatch: string;
  synopsis: string;
  imageUrl: string;
}

const ImageGrid: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch para a lista de filmes (postersMiguel)
  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3000/postersMiguel');
      
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      
      const result = await response.json();
      setMovies(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  // Fetch para os detalhes do filme quando clicado
  const fetchMovieDetails = async (movieId: number, movieTitle: string) => {
    try {
      setDetailLoading(true);
      setError(null);

      // Determina qual endpoint usar baseado no título do filme
      let endpoint = '';
      
      switch (movieTitle.toLowerCase()) {
        case 'gabinete caligari':
          endpoint = 'moviesDany';
          break;
        case 'ouija':
          endpoint = 'filmesLaura';
          break;
        case 'coraline':
          endpoint = 'moviesLuana';
          break;
        default:
          // Para outros filmes, usa um endpoint padrão ou mostra mensagem
          setError('Detalhes não disponíveis para este filme');
          setDetailLoading(false);
          return;
      }

      const response = await fetch(`http://localhost:3000/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      
      const result = await response.json();
      const movieData = Array.isArray(result) ? result[0] : result;
      setSelectedMovie(movieData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setDetailLoading(false);
    }
  };

  const handleMoviePress = (movie: MovieData) => {
    fetchMovieDetails(movie.id, movie.title);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
    setError(null);
  };

  // Tela de detalhes do filme
  if (selectedMovie) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handleBackToList} style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>← Voltar para a lista</ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title"></ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle"></ThemedText>
        </ThemedView>

        <ThemedText type='title' style={styles.headerText}>
          {selectedMovie.title}
        </ThemedText>

        {detailLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#800000" />
            <ThemedText>Carregando detalhes...</ThemedText>
          </View>
        ) : (
          <>
            <View style={styles.contentRow}>
              <View style={styles.posterColumn}>
                <Image
                  style={styles.tinyLogo}
                  source={
                    selectedMovie.imageUrl 
                      ? { uri: selectedMovie.imageUrl }
                      : require('@/assets/images/Chris.jpg')
                  }
                  onError={() => console.log('Erro ao carregar imagem')}
                />
              </View>

              <View style={styles.detailsColumn}>
                <center>
                  <ThemedText type="subtitle">Informações Gerais</ThemedText>
                </center>
                <ThemedText> Lançamento: {selectedMovie.releaseDate}</ThemedText>
                <ThemedText> Gênero: {selectedMovie.genre}</ThemedText>
                <ThemedText> Diretor: {selectedMovie.director}</ThemedText>
                <ThemedText> Roteiro: {selectedMovie.screenwriter}</ThemedText>
                <ThemedText> Duração: {selectedMovie.duration}</ThemedText>
                <ThemedText> Faturamento: {selectedMovie.revenue}</ThemedText>
                <ThemedText> Onde Assistir: {selectedMovie.whereToWatch}</ThemedText>
                <ThemedText />
              </View>
            </View>

            <center>
              <ThemedText type="subtitle">Sinopse</ThemedText>
            </center>
            <ThemedText>{selectedMovie.synopsis}</ThemedText>
          </>
        )}
      </ScrollView>
    );
  }

  // Tela principal com grid de filmes
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#800000" />
        <ThemedText>Carregando filmes...</ThemedText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <ThemedText style={styles.error}>Erro: {error}</ThemedText>
        <TouchableOpacity onPress={fetchMovieList} style={styles.retryButton}>
          <ThemedText>Tentar novamente</ThemedText>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      <ThemedText type="title" style={styles.gridTitle}>Catálogo de Filmes</ThemedText>
      
      <View style={styles.grid}>
        {movies.map((movie) => (
          <TouchableOpacity
            key={movie.id}
            style={styles.movieCard}
            onPress={() => handleMoviePress(movie)}
          >
            <Image
              style={styles.moviePoster}
              source={
                movie.imageUri 
                  ? { uri: movie.imageUri }
                  : require('@/assets/images/Chris.jpg')
              }
              onError={() => console.log(`Erro ao carregar: ${movie.title}`)}
            />
            <ThemedText style={styles.movieTitle}>{movie.title}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 10,
    paddingBottom: 20,
  },
  gridContainer: {
    backgroundColor: '#000000',
    padding: 16,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridTitle: {
    color: '#800000',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
  },
  movieCard: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 8,
  },
  moviePoster: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  movieTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
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
    color: '#800000',
    textAlign: 'center',
    marginTop: 20,
  },
  tinyLogo: {
    width: 220,
    height: 210,
    resizeMode: 'contain'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#800000',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ImageGrid;