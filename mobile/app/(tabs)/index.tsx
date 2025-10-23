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

<<<<<<< HEAD
      <View style={styles.gridContainer}>


        <View style={styles.imagePair}>
        <Image
        style={styles.imagePair}
        source={require('@/assets/images/miguel.jpg')}
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

    </ScrollView>
=======
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/Miguel.webp')}
      />
       <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/Chris.jpg')}
      />
      <Image
        style={styles.tinylogo}
        source={require('@/assets/images/ouijaorigem.jpeg')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/hq720.jpg')}
      />
     <center><ThemedText type="subtitle"></ThemedText></center>
      <ThemedText> </ThemedText>
      <ThemedText> </ThemedText>
      <ThemedText> </ThemedText>
      <ThemedText> </ThemedText>
      <ThemedText> </ThemedText>
      <ThemedText> </ThemedText>
      <ThemedText></ThemedText>
      <ThemedText />

      <center> <ThemedText type="subtitle"></ThemedText></center>
      <ThemedText> </ThemedText>
    </View>
>>>>>>> 23341b3c1fbe5dcf1b160b95a7d9c1a8f022e802
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

<<<<<<< HEAD

=======
>>>>>>> 23341b3c1fbe5dcf1b160b95a7d9c1a8f022e802
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
<<<<<<< HEAD
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

=======
  },

  tinyLogo: {
    height: 100,
    width: 100,
  },
  tinylogo: {
    width: 100,
    height: 100,
>>>>>>> 23341b3c1fbe5dcf1b160b95a7d9c1a8f022e802
  },
  },
);