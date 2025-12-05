import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchProductsByCategory = (category) => {
  return axios.get(`${API_BASE_URL}/products/category/${category}`);
};

export const fetchProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};

export const MALE_CATEGORIES = ['mens-shirts', 'mens-shoes', 'mens-watches'];
export const FEMALE_CATEGORIES = [
  'womens-bags',
  'womens-dresses',
  'womens-jewellery',
  'womens-shoes',
  'womens-watches',
];
