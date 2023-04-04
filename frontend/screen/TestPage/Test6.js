import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Test6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.allmargin}>
        <View style={styles.title}>
          <Icon name="left" size={30} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create New Task</Text>
          <Icon name="left" size={30} style={{ color: 'white' }} />
        </View>

        <View style={styles.area}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Task Name</Text>
          <Text style={styles.inputBox}>UI Design</Text>
        </View>

        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 30 }}>Category</Text>
        <View style={styles.category}>
          <Text style={styles.selectCategoryIcon}>Design</Text>
          <Text style={styles.CategoryIcon}>Development</Text>
          <Text style={styles.CategoryIcon}>Research</Text>
        </View>

        <View style={styles.area}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Date & Time</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#e2e2e8',
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text style={{ color: '#b0b0b0' }}>05 April, Tuesday</Text>
            <Icon name="calendar" size={20} color="#4D85E4" />
          </View>
        </View>

        <View style={styles.timeSet}>
          <View>
            <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 30 }}>Start Time</Text>
            <View style={styles.setBox}>
              <Text>09:00 AM</Text>
              <Icon name="down" size={20} style={{ color: '#7db1f2' }} />
            </View>
          </View>

          <View>
            <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 30 }}>End Time</Text>
            <View style={styles.setBox}>
              <Text>11:00 AM</Text>
              <Icon name="down" size={20} style={{ color: '#7db1f2' }} />
            </View>
          </View>
        </View>

        <View style={styles.area}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}> Description</Text>
          <Text style={styles.inputBox}>
            Research design paths. There are many career paths within the field of design...
          </Text>
        </View>

        <View style={styles.create}>
          <Text style={{ color: 'white', fontSize: 20 }}>Create Task</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  allmargin: {
    margin: 30,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  area: {
    marginTop: 25,
    flexDirection: 'column',
  },
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e2e2e8',
    borderRadius: 10,
    padding: 20,
    fontSize: 15,
    color: '#b0b0b0',
    flexWrap: 'wrap',
  },
  category: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectCategoryIcon: {
    borderWidth: 1,
    borderColor: '#3787eb',
    backgroundColor: '#3787eb',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  CategoryIcon: {
    borderWidth: 1,
    borderColor: '#ecf4fd',
    backgroundColor: '#ecf4fd',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  timeSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  setBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 20,
  },
  create: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3787eb',
    backgroundColor: '#3787eb',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
  },
});

export default Test6;
