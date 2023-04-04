import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Example from '../components/Example';
import TodoCard from '../components/TodoCard';

const Test = () => {
  return (
    <View style={styles.container}>
      <Example left="In Progress (3)" right="Add Task" />
      <View style={styles.cardContainer}>
        <View style={[styles.sideStyle]}>
          <Text style={styles.cardText1}>Reedesign Profile{'\n'}Company</Text>
          <Icon name="ellipsis1" size={30} />
        </View>
        <Text style={styles.cardText2}>https://www.website.com</Text>
        <View style={[styles.sideStyle, styles.cardBottom]}>
          <Text>Progress:</Text>
          <Text style={styles.cardText1}>50%</Text>
        </View>
      </View>
      <Example left="Upcoming Tasks" right="Add Task" />
      <TodoCard title="Remove The Yard Grass" text="Front yard grass" time="22:00" />
      <TodoCard title="Remove The Yard Grass" text="Front yard grass" time="22:00" />
      <TodoCard title="Remove The Yard Grass" text="Front yard grass" time="22:00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#ffcd29',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
  },
  cardText1: {
    fontSize: 20,
    fontWeight: '800',
  },
  cardText2: {
    marginTop: 20,
    fontSize: 14,
    color: '#2965ff',
  },
  cardBottom: {
    alignItems: 'center',
    marginTop: 40,
  },
});

export default Test;
