// src/components/productcard/ProductCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Product = {
    name: string;
    price: number;
    image: string;
};

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: product.image }} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
    },
    cardContent: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
});

export default ProductCard;