// src/layouts/pagecontainer/PageContainer.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { ReactNode } from 'react';

const PageContainer = ({ children }: { children: ReactNode }) => {
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