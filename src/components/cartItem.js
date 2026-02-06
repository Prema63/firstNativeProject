import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({ item, onInc, onDec, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹ {item.price * item.quantity}</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => onDec(item.id)}>
            <Icon name="remove-circle-outline" size={26} />
          </TouchableOpacity>

          <Text style={styles.qty}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => onInc(item.id)}>
            <Icon name="add-circle-outline" size={26} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onRemove(item.id)}>
            <Icon name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: '600',
  },
  price: {
    color: 'red',
    marginVertical: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qty: {
    fontWeight: 'bold',
  },
});