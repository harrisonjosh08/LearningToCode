import {
  View,
  Text,
  StyleSheet, Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { defaultPizzaImage } from '@components/ProductListItem';
import Button from '@components/Button';
import products from '@assets/data/products';

const sizes = ['S', 'M', 'L', 'XL'];


const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() == id);

  const addToCart = () => {
    console.warn('Adding to cart, size: ', selectedSize);
  };

  if (!product) {
    return <Text>Product not found!</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
            ]}
            key={size}
          >
            <Text style={[
              styles.sizeText,
              {
                color: selectedSize === size ? 'black' : 'gray',
              },
            ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 100,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  }
})

export default ProductDetailsScreen;
