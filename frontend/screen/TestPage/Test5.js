import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Test5 = () => {
  const [num, setNum] = useState(second);

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Icon name="left" size={30} />
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Create New Task</Text>
          <Icon name="left" size={30} color="white" />
        </View>

        {/*New Task */}
        <View>
          {/*Task Name*/}
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Task Name</Text>
            <Text style={styles.tasknameText}>UI Design</Text>
          </View>

          {/*Category */}
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Category</Text>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Design</Text>
              <Text style={styles.categoryText}>Development</Text>
              <Text style={styles.categoryText}>Research</Text>
            </View>
          </View>

          {/*Date and Time */}
          <View style={styles.contentContainer}>
            {/*Date */}
            <Text style={styles.titleText}>Date & Time</Text>
            <View style={styles.dateContainer}>
              <Text style={{ fontSize: 15 }}>05 April, Tuesday</Text>
              <Icon name="calendar" size={20} color="#4D85E4" />
            </View>

            {/*Time */}
            <View style={styles.timeContainer}>
              {/*Start */}
              <View>
                <Text style={{ fontSize: 23, fontWeight: '500', marginBottom: 10 }}>Start time</Text>
                <View style={styles.timeboxContainer}>
                  <Text style={{ fontSize: 15, marginRight: 20 }}>09:00 AM</Text>
                  <Icon name="down" size={20} />
                </View>
              </View>
              {/*End */}
              <View>
                <Text style={{ fontSize: 23, fontWeight: '500', marginBottom: 10 }}>End time</Text>
                <View style={styles.timeboxContainer}>
                  <Text style={{ fontSize: 15, marginRight: 20 }}>11:00 AM</Text>
                  <Icon name="down" size={20} />
                </View>
              </View>
            </View>
          </View>

          {/*Description */}
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Description</Text>
            <Text style={styles.tasknameText}>
              Research design paths. There are many {'\n'}
              career paths within the field of design...
            </Text>
          </View>

          {/*Button - Create Task */}
          <View style={styles.buttonContainer}>
            <Text style={{ fontSize: 20, color: 'white' }}>Create Task</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },

  marginContainer: {
    marginHorizontal: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },

  contentContainer: {
    flexDirection: 'column',
    marginTop: 25,
  },

  tasknameText: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    borderWidth: 1,
    borderColor: '#4D85E4',
    borderRadius: 15,
    padding: 15,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#4D85E4',
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 15,
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  timeboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
  },

  buttonContainer: {
    borderWidth: 1,
    backgroundColor: '#4D85E4',
    borderColor: '#4D85E4',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Test5;
