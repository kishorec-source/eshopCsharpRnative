// src/components/productlists/ProductLists.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
}

interface ProductListsProps {
    productListData: Product[];
}

const ProductLists: React.FC<ProductListsProps> = ({ productListData }) => {
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