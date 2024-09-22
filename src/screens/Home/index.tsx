import { StyleSheet, Text, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#8e3f65',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
