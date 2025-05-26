import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../firebase/AuthContext';

const HomeUserScreen = () => {
  const { signOutUser, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido, {user?.email}</Text>
      <Text>Esta es la pantalla de usuario</Text>
      <Button title="Cerrar sesión" onPress={signOutUser} />
    </View>
  );
};

export default HomeUserScreen;
