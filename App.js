import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNavigation from './navigation/stackNavigation';
import { Text } from 'react-native';

import { useFonts, Karla_500Medium, Karla_800ExtraBold, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';
import { MarkaziText_400Regular, MarkaziText_500Medium } from '@expo-google-fonts/markazi-text';

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
    return (<Text>Loading...</Text>)
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
}
