import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface MovieData {
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

const GenericDataComponent: React.FC = () => {
  const [data, setData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3000/movies');
      
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      
      const result = await response.json();
      setData(Array.isArray(result) ? result[0] : result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#800000" />
        <ThemedText>Carregando...</ThemedText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <ThemedText style={styles.error}>Erro: {error}</ThemedText>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.center}>
        <ThemedText>Nenhum dado encontrado</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>

      <ThemedText type='title' style={styles.headerText}>
        {data.title}
      </ThemedText>

      <View style={styles.contentRow}>
        <View style={styles.posterColumn}>
          <Image
            style={styles.tinyLogo}
            source={data.imageUrl ? { uri: data.imageUrl } : require('@/assets/images/capaexpresscabinetcaligari.jpg')}
          />
        </View>

        <View style={styles.detailsColumn}>
          <center>
            <ThemedText type="subtitle">Informações Gerais</ThemedText>
          </center>
          <ThemedText> Lançamento: {data.releaseDate}</ThemedText>
          <ThemedText> Gênero: {data.genre}</ThemedText>
          <ThemedText> Diretor: {data.director}</ThemedText>
          <ThemedText> Roteiro: {data.screenwriter}</ThemedText>
          <ThemedText> Duração: {data.duration}</ThemedText>
          <ThemedText> Faturamento: {data.revenue}</ThemedText>
          <ThemedText> Onde Assistir: {data.whereToWatch}</ThemedText>
          <ThemedText />
        </View>
      </View>

      <center>
        <ThemedText type="subtitle">Sinopse</ThemedText>
      </center>
      <ThemedText>{data.synopsis}</ThemedText>
    </ScrollView>
  );
};

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
  },
});

export default GenericDataComponent;