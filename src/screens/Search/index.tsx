import { StyleSheet, Text, View } from 'react-native';

export function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SEARCH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2f615e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
