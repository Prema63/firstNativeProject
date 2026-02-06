import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productList from '../pages/productList';
import cartPage from '../pages/cartPages';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={productList} />
      <Stack.Screen name="Cart" component={cartPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;