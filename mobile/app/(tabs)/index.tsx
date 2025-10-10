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
  },

  tinyLogo: {
    height: 100,
    width: 100,
  },
  tinylogo: {
    width: 100,
    height: 100,
  },
  },
);