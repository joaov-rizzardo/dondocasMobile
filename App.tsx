import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Routes from './src/Routes';

export default () => <Routes />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: "80%",
    textAlign: "center",
    borderRadius: 5
  }
});
