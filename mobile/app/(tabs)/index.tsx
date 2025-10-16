import { Image, ScrollView, StyleSheet, View } from 'react-native';


import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (

    <ScrollView style={styles.container}>

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

          <View style={styles.gridImage} /> 
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
    marginBottom: 10, 
  },

  gridImage: {

    width: '48%', 
    height: 150, 
    borderRadius: 8,

  },
});