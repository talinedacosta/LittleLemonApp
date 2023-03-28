import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import Onboarding from './screens/Onboarding';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';
import Splash from './components/Splash';
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
