import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  // const store = configureStore()
  return (
    <Provider store={store} >
      <NavigationContainer>

        <SafeAreaProvider>
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          style={{flex:1}}
          >

            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,

                }}
              />
              <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                  headerShown: false,

                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>

        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}


