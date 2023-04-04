import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoCard = ({ title, text, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="ellipsis1" size={24} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.timeContainer}>
        <Icon name="clockcircleo" size={20} />
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  text: {
    marginTop: 6,
    color: '#a1a09f',
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  time: {
    marginLeft: 10,
  },
});

export default TodoCard;
