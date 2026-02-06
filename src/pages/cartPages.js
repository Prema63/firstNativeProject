import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CartContext } from '../context/cartContext';
import CartItem from '../components/cartItem';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <Text style={{ textAlign: 'center', marginTop: 50 }}>Cart is empty</Text>;
  }

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={removeFromCart} />
        )}
      />
    </View>
  );
};

export default CartScreen;