import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login.js';
import Registro from './components/Registro.js';
import Principal from './components/Principal.js';
const Stack = createStackNavigator();
export default function App() {
  const [logado, setLogado] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {logado ? (
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{ headerShown: false }}
          />
        ) : (
          <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
              <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }}
              />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}