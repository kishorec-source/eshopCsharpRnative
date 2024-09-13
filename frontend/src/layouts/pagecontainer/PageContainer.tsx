// src/layouts/pagecontainer/PageContainer.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const PageContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default PageContainer;