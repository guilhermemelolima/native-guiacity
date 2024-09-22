import { StyleSheet, Text, View } from 'react-native';

export function EnterpriseProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ENTERPRISE_PROFILE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#3b4344',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  }
});
