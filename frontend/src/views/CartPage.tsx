// src/views/CartPage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../layouts/pagecontainer/PageContainer';

const CartPage = () => {
  return (
    <PageContainer>
      <View style={styles.section}>
        <Text>Cart Page</Text>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
});

export default CartPage;