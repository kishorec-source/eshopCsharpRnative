// src/components/productlists/ProductLists.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../productcard/ProductCard';

const ProductLists = ({ productListData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productListData}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductLists;