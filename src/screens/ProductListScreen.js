import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsByCategory } from '../store/slices/productsSlice';
import { MALE_CATEGORIES, FEMALE_CATEGORIES } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function ProductListScreen({ route, navigation }) {
  const { gender } = route.params;
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = gender === 'male' ? MALE_CATEGORIES : FEMALE_CATEGORIES;

  useEffect(() => {
    loadProducts();
  }, [gender]);

  useEffect(() => {
    const filtered = items.filter((product) =>
      categories.includes(product.category)
    );
    setFilteredProducts(filtered);
  }, [items, gender]);

  const loadProducts = async () => {
    const promises = categories.map((category) =>
      dispatch(loadProductsByCategory(category))
    );
    await Promise.all(promises);
  };

  const handleProductPress = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  if (loading && filteredProducts.length === 0) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={loadProducts} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleProductPress(item.id)} />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadProducts} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 10,
  },
});