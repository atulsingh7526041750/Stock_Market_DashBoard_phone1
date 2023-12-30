// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import StockDashboard from './StockDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="StockDashboard" component={StockDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
