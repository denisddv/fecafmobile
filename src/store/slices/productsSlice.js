import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsByCategory, fetchProductById } from '../../services/api';

export const loadProductsByCategory = createAsyncThunk(
  'products/loadByCategory',
  async (category) => {
    const response = await fetchProductsByCategory(category);
    return response.data;
  }
);

export const loadProductDetails = createAsyncThunk(
  'products/loadDetails',
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        const newProducts = action.payload.products;
        const existingIds = state.items.map(p => p.id);
        const uniqueProducts = newProducts.filter(p => !existingIds.includes(p.id));
        state.items = [...state.items, ...uniqueProducts];
      })
      .addCase(loadProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(loadProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = productsSlice.actions;
export default productsSlice.reducer;