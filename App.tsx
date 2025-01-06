import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { navigationRef } from './src/utils/hooks/useNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
}
