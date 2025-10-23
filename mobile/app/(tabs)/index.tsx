import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>


      <ThemedText style={styles.headerText}>
      Filmcyzing

      </ThemedText>

      <View style={styles.gridContainer}>


        <View style={styles.imagePair}>
          <Image
            style={styles.gridImage}
            source={require('@/assets/images/Miguel.webp')}
          />
          <Image
            style={styles.gridImage}
            source={require('@/assets/images/Chris.jpg')}
          />
        </View>


        <View style={styles.imagePair}>
          <Image
            style={styles.gridImage}
            source={require('@/assets/images/ouijaorigem.jpeg')}
          />
          <Image
            style={styles.gridImage}
            source={require('@/assets/images/hq720.jpg')}
          />
        </View>


        <View style={styles.imagePair}>
          <Image
            style={styles.gridImage}
            source={require('@/assets/images/Noivacadaver2.jpg')}
          />
          <Image
            style={styles.imagePair}
            source={require('@/assets/images/coraline.jpg')}
          />

          <View style={styles.gridImage} />
        </View>

      </View>

      <View style={{ height: 50 }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '000000',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '000000'
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '000000'
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
    paddingHorizontal: 10,

  },


  imagePair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  gridImage: {

    width: '50%',
    height: 150,
    borderRadius: 8,

  },
  },
);