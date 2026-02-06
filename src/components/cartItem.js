import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.item}>
      <Text numberOfLines={1}>{item.title}</Text>
      <Text>Qty: {item.quantity}</Text>
      <Text>₹ {item.price * item.quantity}</Text>

      <Button title="Remove" color="red" onPress={() => onRemove(item.id)} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 2,
  },
});