import { StyleSheet, Text, View } from 'react-native';

export function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SETTINGS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#554236',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
