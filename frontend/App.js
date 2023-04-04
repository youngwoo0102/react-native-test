import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Test from './screen/Test';
import { Test1, Test2, Test3, Test4, Test5, Test6, Test2Sub } from './screen/TestPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Test1"
        component={Test1}
        options={{
          tabBarLabel: 'Test1',
          tabBarIcon: () => <Icon name="github" size={25} />,
        }}
      />
      <Tab.Screen
        name="Test2"
        component={Test2}
        options={{
          tabBarLabel: 'Test2',
          tabBarIcon: () => <Icon name="apple1" size={25} />,
        }}
      />
      <Tab.Screen
        name="Test3"
        component={Test3}
        options={{
          tabBarLabel: 'Test3',
          tabBarIcon: () => <Icon name="QQ" size={25} />,
        }}
      />
      <Tab.Screen
        name="Test4"
        component={Test4}
        options={{
          tabBarLabel: 'Test4',
          tabBarIcon: () => <Icon name="slack-square" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', android: undefined })} style={styles.avoid}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTab" component={HomeTabs} />
            <Stack.Screen name="test" component={Test} options={{ headerShown: true, title: '네비테스트' }} />
            <Stack.Screen name="test5" component={Test5} options={{ headerShown: true, title: '네비테스트2' }} />
            <Stack.Screen
              name="test2sub"
              component={Test2Sub}
              options={{ headerShown: true, title: 'Create New Task', headerTitleAlign: 'center' }}
            />
            <Stack.Screen name="test6" component={Test6} options={{ headerShown: true, title: 'Test6' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avoid: {
    flex: 1,
  },
});
