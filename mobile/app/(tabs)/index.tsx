import { ThemedText } from '@/components/themed-text';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const SPACING = 10;
const IMAGE_WIDTH = (width - SPACING * 3) / 2;

interface GridItem {
  id: number;
  title: string;
  imageUri: string;
}

interface ImageGridProps {
  endpoint: string;
  apiBaseUrl?: string;
  onImagePress: (itemId: number, itemTitle: string) => void;
  headerTitle?: string;
}

const DEFAULT_API_URL = 'http://localhost:3000';

// Cache simples para evitar requisições duplicadas
const cache = new Map();

const ImageGrid: React.FC<ImageGridProps> = ({
  endpoint,
  apiBaseUrl = DEFAULT_API_URL,
  onImagePress,
  headerTitle = "FILMES"
}) => {
  const [items, setItems] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGridItems = useCallback(async () => {
    // Verificar cache primeiro
    const cacheKey = `${apiBaseUrl}/${endpoint}`;
    
    if (cache.has(cacheKey)) {
      setItems(cache.get(cacheKey));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout de 10 segundos

      const url = `${apiBaseUrl}/${endpoint}`;
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      const data: GridItem[] = await response.json();
      
      // Armazenar no cache
      cache.set(cacheKey, data);
      setItems(data);

    } catch (err: any) {
      console.error("Erro no fetch:", err);
      
      if (err.name === 'AbortError') {
        setError('Tempo de requisição excedido. Verifique sua conexão.');
      } else {
        setError('Não foi possível carregar os itens. Verifique o json-server.');
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint, apiBaseUrl]);

  useEffect(() => {
    fetchGridItems();
  }, [fetchGridItems]);

  // Pré-processamento dos dados para evitar recálculos desnecessários
  const pairedItems = React.useMemo(() => {
    const pairs: GridItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push(items.slice(i, i + 2));
    }
    return pairs;
  }, [items]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <ThemedText style={styles.loadingText}>Carregando {headerTitle}...</ThemedText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <ThemedText style={styles.errorText}>❌ {error}</ThemedText>
        <TouchableOpacity style={styles.retryButton} onPress={fetchGridItems}>
          <ThemedText style={styles.retryText}>Tentar Novamente</ThemedText>
        </TouchableOpacity>
      </View>
    );
  }

  if (items.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ThemedText style={styles.errorText}>Nenhum item encontrado no endpoint /{endpoint}.</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.headerText}>{headerTitle}</ThemedText>

      <View style={styles.gridContainer}>
        {pairedItems.map((pair, index) => (
          <View key={`pair-${index}`} style={styles.imagePair}>
            {pair.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => onImagePress(item.id, item.title)}
                style={styles.imageContainer}
              >
                <Image
                  style={styles.gridImage}
                  source={{ uri: item.imageUri }}
                  resizeMode="cover"
                  onError={() => console.warn(`Erro ao carregar imagem: ${item.title}`)}
                />
              </TouchableOpacity>
            ))}
            {pair.length === 1 && <View style={styles.gridImagePlaceholder} />}
          </View>
        ))}
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
    minHeight: 300,
  },
  loadingText: {
    color: '#CCCCCC',
    marginTop: 10,
  },
  errorText: {
    color: '#FF4500',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  gridContainer: {
    paddingHorizontal: SPACING,
  },
  imagePair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: IMAGE_WIDTH,
    height: 150,
    borderRadius: 8,
  },
  gridImagePlaceholder: {
    width: IMAGE_WIDTH,
    height: 150,
  }
});