import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//pages
import Home from '../src/Home/index'
import { TouchableOpacity } from 'react-native';
import Detail from './Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitleAlign: 'center', headerStyle: { backgroundColor: '#458a00' },
        }} />
        <Stack.Screen name="Detail" component={Detail} options={{
          headerTitleAlign: 'center', headerStyle: { backgroundColor: '#458a00' },
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;