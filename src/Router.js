import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';


//pages
import Home from '../src/Home/index'
import { TouchableOpacity } from 'react-native';
import Detail from './Detail';
import Login from './Login';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{
          headerTitleAlign: 'center', headerStyle: { backgroundColor: '#458a00' },
          headerLeft : () => (
            <TouchableOpacity  style={{ marginLeft: 130 }}> 
              <Ionicons name="person-circle-outline" size={32} color="black" />
            </TouchableOpacity>
          )
        }}></Stack.Screen>
        <Stack.Screen name="Questions" component={Home} options={{
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