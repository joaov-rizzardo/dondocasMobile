import App from './src/App';
import { AuthProvider } from './src/contexts/AuthContext';

export default () => {

  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
  
}