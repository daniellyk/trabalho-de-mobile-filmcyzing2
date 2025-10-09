import { StyleSheet, View } from 'react-native';

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
        CORALINE
      </ThemedText>
      <center><ThemedText type="subtitle">Informações gerais:</ThemedText></center>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>
      <ThemedText></ThemedText>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF'
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#2D2828'
  },
  
  headerText: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#340A63', 
    textAlign: 'center', 
    marginTop: 20, 
  },
  
  reactLogo: {
    height: 280,
    width: 550,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
    