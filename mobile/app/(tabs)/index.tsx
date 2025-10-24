import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const handleImagePress = (imageName: string) => {
    console.log(`Image pressed: ${imageName}`);

  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>

      <ThemedText style={styles.headerText}> Filmcyzing </ThemedText>
      <View style={styles.gridContainer}>
        <View style={styles.imagePair}>
          <TouchableOpacity onPress={() => handleImagePress('miguel.jpg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/miguel.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('Chris.jpg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/Chris.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.imagePair}>
          <TouchableOpacity onPress={() => handleImagePress('ouijaorigem.jpeg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/ouijaorigem.jpeg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('hq720.jpg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/hq720.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.imagePair}>
          <TouchableOpacity onPress={() => handleImagePress('Noivacadaver2.jpg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/Noivacadaver2.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('coraline.jpg')}>
            <Image style={styles.gridImage} source={require('@/assets/images/coraline.jpg')} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  titleContainer: {},
  stepContainer: {},
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
    width: '48%',
    height: 150,
    borderRadius: 8,
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  tinylogo: {
    width: 100,
    height: 100,
  },
});