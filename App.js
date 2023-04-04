import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/AuthContext';
import StackNavigation from './navigation/stackNavigation';

import { useFonts, Karla_500Medium, Karla_800ExtraBold, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';
import { MarkaziText_400Regular, MarkaziText_500Medium } from '@expo-google-fonts/markazi-text';
import { Text } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_500Medium,
    Karla_800ExtraBold,
    Karla_700Bold,
    Karla_400Regular,
    MarkaziText_400Regular,
    MarkaziText_500Medium,
  });

  if (!fontsLoaded) {
    return (<Text>Carregando</Text>)
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>

  );
}
