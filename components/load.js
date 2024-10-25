import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Load = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const startFadeAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 3000, 
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 3000, 
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startFadeAnimation();

    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [fadeAnimation, navigation]);

  return (
    <LinearGradient
      colors={['#f0f0f5', '#e8e8ef']} // Soft gradient with cream tones
      style={styles.container}
    >
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeAnimation }}>
          <Image
            source={require('./cala.webp')} // Premium logo or visual
            style={styles.logo}
          />
        </Animated.View>
        <View style={styles.card}>
          <Text style={styles.mainText}>Welcome to Cala</Text>
          <Text style={styles.subText}>Your Pocket Chemistry Lab</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 40,
    borderWidth: 1,  // Classic touch with thin border
    borderColor: '#ddd',
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    width: 320,
    borderWidth: 1,
    borderColor: '#ccc', // Subtle border for elegance
  },
  mainText: {
    fontSize: 30, // Larger title for classic emphasis
    fontWeight: 'bold',
    fontFamily: 'Georgia', // Premium serif font
    color: '#2e2e2e',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 0.5, // Spacing for classic feel
  },
  subText: {
    fontSize: 18,
    fontFamily: 'Georgia',
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#004080', // Rich navy or classic color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#003366', // Matching classic color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Merriweather', // Classy font for buttons
  },
});

export default Load;
