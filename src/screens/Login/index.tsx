import { StyleSheet, Text, View } from 'react-native';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#73738d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
