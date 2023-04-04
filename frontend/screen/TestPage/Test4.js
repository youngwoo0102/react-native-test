import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Test4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Pressable onPress={() => navigation.navigate('test5')}>
          <Icon name="downcircle" size={40} />
        </Pressable>
        <Icon name="questioncircle" size={40} />
      </View>
      <View style={styles.typeContainer}>
        <Text style={{ borderWidth: 1, borderColor: '#000000', borderRadius: 17, padding: 7, fontSize: 20 }}>
          Sweet Home
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 80, fontWeight: '400' }}>Grocery{'\n'}Shopping</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardtopContainer}>
          <Text>Time Left</Text>
          <Text>Assignee</Text>
        </View>
        <View style={styles.cardtimeContainer}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 35, fontWeight: '500' }}>2h 45m</Text>
            <Text>Dec 12, 2022</Text>
          </View>
          <Icon name="user" size={40} />
        </View>
        <View style={styles.cardtopContainer}>
          <Text>Additional Description</Text>
        </View>
        <View style={styles.cardcontentContainer}>
          <Text style={{ fontSize: 17, fontWeight: '500' }}>
            We have to buy some fresh bread, fruits, and {'\n'}
            vegetables. Supply of water is running out.
          </Text>
        </View>
        <View style={styles.cardtopContainer}>
          <Text>Created</Text>
        </View>
        <View style={styles.cardtopContainer}>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Dec 10, by Matt</Text>
        </View>
        <View style={styles.checkContainer}>
          <Icon name="checkcircle" size={40} color="white" />
          <Text style={{ color: 'white' }}>Set As Done</Text>
          <Icon name="checkcircle" size={40} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFD55',
    justifyContent: 'center',
  },
  menuContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  cardContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'column',
  },
  cardtopContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardtimeContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardcontentContainer: {
    marginVertical: 10,
    marginBottom: 20,
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 50,
    borderWidth: 10,
  },
});

export default Test4;
