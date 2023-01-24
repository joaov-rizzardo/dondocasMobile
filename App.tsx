import { StatusBar } from 'expo-status-bar';
import { mainColor } from './src/configs/Colors';
import Content from './src/Content';
import { AuthProvider } from './src/contexts/AuthContext';

export default () => {

  return (
    <AuthProvider>
      <StatusBar backgroundColor={mainColor}/>
      <Content />
    </AuthProvider>
  )
  
}