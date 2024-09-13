// src/views/HomePage.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { fetchProductsAsync } from '../store/products/products.action';
import { selectProductsLists } from '../store/products/products.selector';
import ProductLists from '../components/productlists/ProductLists';
import PageContainer from '../layouts/pagecontainer/PageContainer';

const HomePage = () => {
  const productListData = useAppSelector(selectProductsLists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <PageContainer>
      <View style={styles.section}>
        <ProductLists productListData={productListData} />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
});

export default HomePage;