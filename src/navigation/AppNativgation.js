import React, { useContext, useLayoutEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProductList from '../pages/productList';
import CartScreen from '../pages/cartPages';
import { CartContext } from '../context/cartContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductList}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{ marginRight: 16 }}
            >
              <View style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="shopping-cart" size={28} color="#000" />

                {cartItems.length > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      minWidth: 20,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: '#E53935', 
                      alignItems: 'center',
                      justifyContent: 'center',
                      // paddingHorizontal: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: '700',
                        lineHeight: 20,
                        textAlign: 'center'
                      }}
                    >
                      {cartItems.length}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;