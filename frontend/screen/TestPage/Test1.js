import { View, Text, StyleSheet, Pressable } from 'react-native';

const Test1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('test')}>
        <Text style={{ fontSize: 30 }}>버튼입니당</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f2685e',
    padding: 20,
    borderRadius: 50,
  },
});

export default Test1;
