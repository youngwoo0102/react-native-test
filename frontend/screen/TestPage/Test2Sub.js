import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Test2Sub = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Task Name</Text>
        <TextInput style={styles.textInput} placeholder="UI Design" />
      </View>

      <View>
        <Text style={styles.title}>Category</Text>
        <View style={styles.category}>
          <Pressable style={styles.button}>
            <Text>Design</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text>Development</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text>Research</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Date & Time</Text>
        <View style={styles.sub}>
          <Text style={styles.text1}>05 April, Tuesday</Text>
          <Icon name="calendar" size={20} />
        </View>
      </View>

      <View style={styles.time}>
        <View style={{ width: '50%' }}>
          <Text style={styles.title}>Start time</Text>
          <View style={styles.sub}>
            <Text style={styles.text1}>09:00 AM</Text>
            <Icon name="down" size={20} />
          </View>
        </View>
        <View style={{ width: '45%' }}>
          <Text style={styles.title}>End time</Text>
          <View style={styles.sub}>
            <Text style={styles.text1}>11:00 AM</Text>
            <Icon name="down" size={20} />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Research design paths. There are many career paths within the field of design..."
        />
      </View>
      <Pressable>
        <Text style={styles.bbutton}>Create Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  textInput: {
    marginBottom: 30,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderWidth: 2,
    fontSize: 18,
  },

  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  button: {
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#E2E2E2',
  },

  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bbutton: {
    marginTop: 40,
    textAlign: 'center',
    backgroundColor: '#0055FF',
    padding: 20,
    borderRadius: 20,
    fontSize: 25,
    color: 'white',
  },

  text1: {
    fontSize: 18,
    color: 'gray',
  },

  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#E2E2E2',
    alignItems: 'center',
    padding: 15,
    marginBottom: 30,
  },
});

export default Test2Sub;
