import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { useAuth } from '../firebase/AuthContext';
import HomeAdminScreen from '../screens/HomeAdminScreen';
import HomeUserScreen from '../screens/HomeUserScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeUser: undefined;
  HomeAdmin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" id={undefined}>
        {user ? (
          isAdmin ? (
            <Stack.Screen
              name="HomeAdmin"
              component={HomeAdminScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="HomeUser"
              component={HomeUserScreen}
              options={{ headerShown: false }}
            />
          )
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'Iniciar sesión' }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'Registrarse' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
