// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('./che.png')} // Your background image path here
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={require('./yura.jpg')} // Your logo image here
          style={styles.logo}
        />
        <ActivityIndicator size="large" color="#007ACC" style={styles.loader} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // This will make the background image cover the entire screen
  },
  container: {
    flex: 1,
    padding:100,
    alignItems: 'center',
  },
  logo: {
    width: 200,  // Set a fixed size for the logo
    height: 200,
    borderRadius: 75,  // Half of the width/height to make it circular
    borderWidth: 2,
    borderColor: '#fff',  // Optional: add a white border around the logo
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
