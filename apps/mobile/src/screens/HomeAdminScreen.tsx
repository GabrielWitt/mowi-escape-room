import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../firebase/AuthContext';

const HomeAdminScreen = () => {
  const { signOutUser, user } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido Admin, {user?.email}</Text>
      <Text>Pantalla de administración (gestionar juegos, niveles...)</Text>
      <Button title="Cerrar sesión" onPress={signOutUser} />
    </View>
  );
};

export default HomeAdminScreen;