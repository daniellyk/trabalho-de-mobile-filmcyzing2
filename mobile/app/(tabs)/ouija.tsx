import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

interface MovieData {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate: string;
  genre: string;
  director: string;
  duration: string;
  revenue: string;
  distribution: string;
  whereToWatch: string;
  synopsis: string;
}

interface GenericMovieProps {
  endpoint: string;
}

export default function GenericMovie({ endpoint }: GenericMovieProps) {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Tente diferentes formatos de URL
      const baseURL = 'http://localhost:3000';
      const urlsToTry = [
        `${baseURL}/${endpoint}`,
        `${baseURL}/filmes`,
        `${baseURL}/movies`
      ];

      let response = null;
      let lastError = null;

      // Tenta cada URL até uma funcionar
      for (const url of urlsToTry) {
        try {
          console.log('Tentando URL:', url);
          response = await fetch(url);
          
          if (response.ok) {
            const data = await response.json();
            console.log('Dados recebidos de:', url, data);
            
            if (Array.isArray(data)) {
              if (data.length === 0) {
                throw new Error('Array vazio');
              }
              setMovieData(data[0]);
            } else {
              setMovieData(data);
            }
            return; // Sucesso, sai da função
          }
        } catch (err) {
          lastError = err;
          console.log('Falha na URL:', url, err);
          continue; // Tenta a próxima URL
        }
      }

      // Se nenhuma URL funcionou
      throw new Error(lastError instanceof Error ? lastError.message : 'Endpoint não encontrado. Verifique o json-server.');

    } catch (err) {
      console.error('Erro final:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [endpoint]);

  // Dados de fallback para demonstração
  const fallbackData: MovieData = {
    id: "1",
    title: "Ouija: A Origem do Mal",
    posterUrl: "",
    releaseDate: "20 de outubro de 2016",
    genre: "Terror, drama e suspense",
    director: "Mike Flanagan",
    duration: "1h 39min",
    revenue: "81,7 milhões de dólares",
    distribution: "Universal Pictures",
    whereToWatch: "Amazon prime, YouTube e Apple TV alugar ou comprar",
    synopsis: "Em 1967, uma médium-golpista com suas duas filhas fazem farsas de contatos com o além. Para melhorar a qualidade dos golpes, a mãe decide comprar um tabuleiro Ouija e, numa brincadeira, acaba descobrindo que sua filha caçula Doris tem o dom de falar com espíritos. Ao tentar invocar o espírito do pai, a garotinha acaba atraindo outros espíritos, transformando a tentativa de ganho financeiro num pesadelo de possessão que ameaça a família e exige um exorcismo."
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="red" />
        <Text style={styles.loadingText}>Carregando dados do servidor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Erro: {error}</Text>
        <Text style={styles.infoText}>Usando dados de demonstração...</Text>
        <Text style={styles.retryText} onPress={fetchMovieData}>
          Tentar novamente
        </Text>
        
        {/* Mostra os dados de fallback */}
        <ScrollView style={styles.container}>
          <Text style={styles.headerText}>
            {fallbackData.title}
          </Text>

          <View style={styles.infoRowContainer}>
            <Image
              style={styles.posterImage}
              source={require('@/assets/images/ouijaorigem.jpeg')}
            />

            <View style={styles.generalInfoContainer}>
              <Text style={styles.subtitleCentered}>
                Informações Gerais
              </Text>
              <Text style={styles.infoText}>Lançamento: {fallbackData.releaseDate}</Text>
              <Text style={styles.infoText}>Gênero: {fallbackData.genre}</Text>
              <Text style={styles.infoText}>Diretor: {fallbackData.director}</Text>
              <Text style={styles.infoText}>Duração: {fallbackData.duration}</Text>
              <Text style={styles.infoText}>Faturamento: {fallbackData.revenue}</Text>
              <Text style={styles.infoText}>Distribuição: {fallbackData.distribution}</Text>
              <Text style={styles.infoText}>Onde Assistir: {fallbackData.whereToWatch}</Text>
            </View>
          </View>

          <View style={styles.synopsisContainer}>
            <Text style={styles.subtitleCentered}>
              Sinopse
            </Text>
            <Text style={styles.synopsisText}>
              {fallbackData.synopsis}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        {movieData?.title || 'Título não disponível'}
      </Text>

      <View style={styles.infoRowContainer}>
        <Image
          style={styles.posterImage}
          source={movieData?.posterUrl ? { uri: movieData.posterUrl } : require('@/assets/images/ouijaorigem.jpeg')}
        />

        <View style={styles.generalInfoContainer}>
          <Text style={styles.subtitleCentered}>
            Informações Gerais
          </Text>
          <Text style={styles.infoText}>Lançamento: {movieData?.releaseDate || 'Não informado'}</Text>
          <Text style={styles.infoText}>Gênero: {movieData?.genre || 'Não informado'}</Text>
          <Text style={styles.infoText}>Diretor: {movieData?.director || 'Não informado'}</Text>
          <Text style={styles.infoText}>Duração: {movieData?.duration || 'Não informado'}</Text>
          <Text style={styles.infoText}>Faturamento: {movieData?.revenue || 'Não informado'}</Text>
          <Text style={styles.infoText}>Distribuição: {movieData?.distribution || 'Não informado'}</Text>
          <Text style={styles.infoText}>Onde Assistir: {movieData?.whereToWatch || 'Não informado'}</Text>
        </View>
      </View>

      <View style={styles.synopsisContainer}>
        <Text style={styles.subtitleCentered}>
          Sinopse
        </Text>
        <Text style={styles.synopsisText}>
          {movieData?.synopsis || 'Sinopse não disponível'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
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
    backgroundColor: '#333',
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
    marginBottom: 4,
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
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: 20,
  },
});