import { StatusBar } from 'expo-status-bar';
import ScreenLoader from './src/components/ScreenLoader';
import { mainColor } from './src/configs/Colors';
import Content from './src/Content';
import { AuthProvider } from './src/contexts/AuthContext';
import { LoadingProvider } from './src/contexts/LoadingContext';

export default () => {

  return (
    <LoadingProvider>
      <ScreenLoader>
        <AuthProvider>
          <StatusBar backgroundColor={mainColor}/>
          <Content />
        </AuthProvider>
      </ScreenLoader>
    </LoadingProvider>

  )
  
}