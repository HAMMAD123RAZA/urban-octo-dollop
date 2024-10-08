import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';  // Import this from firebase/auth
import { auth } from '@/firebase/Configs';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import MealList from '../../components/MealList';
import Login from '../auth/Login';
import { Colors } from '@/constants/Colors';
import Register from '../auth/Registration';
const Index = () => {
  const [user, setUser] = useState(null);  // Track authenticated user
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // User is logged in
      } else {
        setUser(null);  // No user is logged in
      }
      setLoading(false);  // Stop loading once we know auth state
    });

    return () => unsubscribe();  // Cleanup on unmount
  }, []);
  
  if (loading) {
    return (    
      <View className='my-20' >
<ActivityIndicator size={40}   color={Colors.primary} />
      </View>
    )
  }

  return user ? (
    <ScrollView>
      <View>
        <Header />
        <Slider />
        <Category />
        <MealList />
      </View>
    </ScrollView>
  ) : (
    <Register /> 
  );
};

export default Index;