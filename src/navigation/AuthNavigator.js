import React from 'react';
import { LoginScreen, ForgetScreen } from '../screens';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
