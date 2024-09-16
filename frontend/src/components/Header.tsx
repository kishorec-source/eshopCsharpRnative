// src/components/header/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAppSelector } from '../../store/hooks/hooks';
import { selectCartCount } from '../../store/cart/cart.selector';
import { RootStackParamList } from '../../navigation/AppNavigator'; // Import RootStackParamList

const Header = () => {
    const cartCount = useAppSelector(selectCartCount);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the typed navigation

    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.headerInner}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.logo}>Redux Shopping Cart</Text>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cart}>
                            <Image style={styles.cartIcon} />
                            <Text>{cartCount}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        fontSize: 20,
        color: '#fff',
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartIcon: {
        width: 24,
        height: 24,
    },
});

export default Header;