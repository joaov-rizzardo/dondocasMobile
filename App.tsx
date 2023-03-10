
import { StatusBar } from 'react-native';
import ScreenLoader from './src/components/ScreenLoader';
import { mainColor } from './src/configs/Colors';
import Content from './src/Content';
import { AuthProvider } from './src/contexts/AuthContext';
import { LoadingProvider } from './src/contexts/LoadingContext';

export default () => {

  return (
    <>
      <StatusBar backgroundColor={mainColor} />
      <LoadingProvider>
        <ScreenLoader 
          backgroundColor={mainColor} 
          logoImage={require('./src/assets/logo.png')}
          logoWidth={300}
          logoHeight={300}
        >
          <AuthProvider>
            <Content />
          </AuthProvider>
        </ScreenLoader>
      </LoadingProvider>
    </>

  )
  
}