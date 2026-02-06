import React, { useContext } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { CartContext } from '../context/cartContext';
import CartItem from '../components/cartItem';

const CartScreen = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <Text style={{ textAlign: 'center', marginTop: 50 }}>Cart is empty</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onInc={increaseQty}
            onDec={decreaseQty}
            onRemove={removeFromCart}
          />
        )}
      />

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Total: ₹ {total}
        </Text>
        <Button title="Buy Now" onPress={() => alert('Order placed, you can do continue shopping')} />
      </View>
    </View>
  );
};

export default CartScreen;