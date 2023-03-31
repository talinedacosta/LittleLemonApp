import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/AuthContext';
import StackNavigation from './navigation/stackNavigation';

export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>

  );
}
