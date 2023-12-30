import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import RegistrationPage from './RegistrationPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RegistrationPage />
      </SafeAreaView>
    </>
  );
};

export default App;
