import { StyleSheet, Text, View } from 'react-native';

export function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REGISTER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#301860',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
