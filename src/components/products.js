import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { CartContext } from '../context/cartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>

      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '600',
  },
  price: {
    marginVertical: 5,
    color: 'green',
  },
});