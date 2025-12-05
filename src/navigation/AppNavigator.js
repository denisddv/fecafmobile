import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { logout } from '../store/slices/authSlice';

import LoginScreen from '../screens/LoginScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductTabs() {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => dispatch(logout())}
            style={{ marginRight: 15 }}
          >
            <Text style={{ color: '#007AFF', fontSize: 16, fontWeight: '600' }}>Sair</Text>
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen 
        name="Masculino" 
        component={ProductListScreen}
        initialParams={{ gender: 'male' }}
        options={{ title: 'Produtos Masculinos' }}
      />
      <Tab.Screen 
        name="Feminino" 
        component={ProductListScreen}
        initialParams={{ gender: 'female' }}
        options={{ title: 'Produtos Femininos' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <> 
          <Stack.Screen 
            name="Products" 
            component={ProductTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetailScreen}
            options={{ 
              title: 'Detalhes do Produto',
              headerBackTitle: 'Voltar'
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}