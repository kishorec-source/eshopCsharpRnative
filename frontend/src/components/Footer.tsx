// src/components/footer/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text>2024 &bull; © HM's &bull; React Redux Shopping Cart</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
});

export default Footer;