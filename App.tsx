import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/cartContext';
import AppNavigator from './src/navigation/AppNativgation';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;