import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Test3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbutton}>
        <Pressable onPress={() => navigation.navigate('test6')}>
          <Icon name="downcircle" size={50} />
        </Pressable>
        <Icon2 name="dots-horizontal-circle" size={55} />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttontext}>Today</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titlefont}>동양미래대학교 React Study</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.timeleft}>남은 시간</Text>
        <Text style={styles.assignee}>참여인원</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.remaintime}>2시간 45분</Text>
        <Icon name="smileo" size={40} />
      </View>
      <Text style={styles.date}>2023년 3월 21일</Text>
      <Text style={styles.descript}>메모</Text>
      <Text style={styles.description}>Do reprehenderit cillum commodo irure esse in. Fugiat aliquip consectetur</Text>
      <Text style={styles.descript}>등록한 사람</Text>
      <Text style={styles.description}>Mar 19, 최</Text>
      <View style={styles.checkbox}>
        <Icon name="checkcircle" size={90} style={styles.chkico} />
        <Text style={styles.check}>수정 완료</Text>
        <Icon name="checkcircle" size={90} style={{ color: '#111c2f' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef970',
  },
  topbutton: {
    marginTop: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttontext: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
  },
  title: {
    marginHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  titlefont: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeleft: {
    marginLeft: 20,
    fontSize: 15,
    color: '#777924',
  },
  assignee: {
    marginRight: 20,
    fontSize: 15,
    color: '#777924',
  },
  time: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  remaintime: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  date: {
    marginHorizontal: 20,
    fontSize: 15,
  },
  descript: {
    marginTop: 35,
    marginLeft: 20,
    fontSize: 15,
    color: '#777924',
  },
  description: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
  },
  chkico: {
    color: 'white',
  },
  checkbox: {
    marginTop: 35,
    marginBottom: 3,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: '#111c2f',
  },
  check: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Test3;
