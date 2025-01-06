import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/view';

export type StackParams = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
