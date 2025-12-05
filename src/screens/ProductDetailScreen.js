import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductDetails } from '../store/slices/productsSlice';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProductDetails(productId));
  }, [productId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => dispatch(loadProductDetails(productId))}
      />
    );
  }

  if (!selectedProduct) {
    return null;
  }

  const discountedPrice = (
    selectedProduct.price *
    (1 - selectedProduct.discountPercentage / 100)
  ).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: selectedProduct.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>{selectedProduct.title}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {selectedProduct.rating.toFixed(1)}</Text>
          <Text style={styles.stock}>{selectedProduct.stock > 0 
            ? `${selectedProduct.stock} em estoque` 
            : 'Sem estoque'}</Text>
        </View>

        <Text style={styles.description}>{selectedProduct.description}</Text>

        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.originalPrice}>R$ {selectedProduct.price.toFixed(2)}</Text>
            {selectedProduct.discountPercentage > 0 && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  -{selectedProduct.discountPercentage.toFixed(0)}%
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.finalPrice}>R$ {discountedPrice}</Text>
          <Text style={styles.savings}>
            Economia de R$ {(selectedProduct.price - discountedPrice).toFixed(2)}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <InfoRow label="Marca" value={selectedProduct.brand} />
          <InfoRow label="Categoria" value={selectedProduct.category} />
        </View>
      </View>
    </ScrollView>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: width,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
  stock: {
    fontSize: 14,
    color: '#34c759',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 20,
  },
  priceContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountBadge: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  finalPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  savings: {
    fontSize: 14,
    color: '#34c759',
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
