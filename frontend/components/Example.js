import { View, Text, StyleSheet } from 'react-native';

const Example = ({ left, right }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{left}</Text>
      <Text style={styles.rightText}>{right}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    marginLeft: 30,
    fontSize: 18,
    fontWeight: '600',
  },
  rightText: {
    marginRight: 30,
    fontSize: 18,
    fontWeight: '700',
    color: '#a6771b',
    textDecorationLine: 'underline',
  },
});

export default Example;
