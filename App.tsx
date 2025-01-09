import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes } from './src/routes';
import { navigationRef } from './src/utils/hooks/useNavigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
