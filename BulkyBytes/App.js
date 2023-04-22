import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ff66',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
