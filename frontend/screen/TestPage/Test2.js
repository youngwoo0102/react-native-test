import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Test2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sideStyle}>
        <Pressable onPress={() => navigation.navigate('test2sub')}>
          <Icon name="downcircle" size={50} />
        </Pressable>
        <Icon2 name="dots-horizontal-circle" size={50} />
      </View>
      <View style={{ paddingTop: 30, flexDirection: 'row' }}>
        <Text style={styles.text1}>Sweet Home</Text>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 45 }}>
        <Text style={styles.text2}>Grocery {'\n'}Shopping</Text>
      </View>
      <View style={styles.sideStyle}>
        <Text style={styles.titleText}>Time Left</Text>
        <Text style={styles.titleText}>Assignee</Text>
      </View>
      <View style={styles.sideStyle}>
        <View>
          <Text style={styles.time}>2h 45m</Text>
          <Text>Mar 21, 2023</Text>
        </View>
        <Text>사진...</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Additional Description</Text>
        <Text style={{ fontSize: 18 }}>
          We have to buy some fresh bread, fruit, and vegetables. Supply of water is running out.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.titleText}>Created</Text>
        <Text>Dec 10, by Matt</Text>
      </View>
      <View style={styles.bottom}>
        <View style={{ width: '20%' }}>
          <Icon2 name="checkbox-marked-circle" size={60} color="white" />
        </View>
        <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: 'white' }}>set As Done</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEE90',
    padding: 25,
    flex: 1,
  },

  sideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text1: {
    borderRadius: 30,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#0e0f37',
    borderColor: '#0e0f37',
  },

  text2: {
    fontWeight: 'bold',
    fontSize: 70,
  },

  titleText: {
    color: 'gray',
    marginBottom: 10,
    fontSize: 17,
  },

  title: {
    paddingTop: 20,
    justifyContent: 'space-between',
  },

  time: {
    fontSize: 40,
  },

  bottom: {
    marginTop: 50,
    borderRadius: 60,
    backgroundColor: '#0e0f37',
    flexDirection: 'row',
  },
});
export default Test2;
