import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#f7f7f7']} // Softer gradient for elegance
      style={styles.container}
    >
      {/* Centered Cala title and description */}
      <View style={styles.centerContainer}>
        <Text style={styles.appTitle}>Cala</Text>
        <Text style={styles.appSubtitle}>Pocket Chemistry Lab</Text>
        <Text style={styles.appDescription}>
          Explore chemical elements, simulate reactions, and learn chemistry on the go!
        </Text>
      </View>

      {/* Buttons with descriptions in big boxes */}
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.infoBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Elementspage')}
            >
              <Text style={styles.buttonText}>Elements</Text>
            </TouchableOpacity>
            <Text style={styles.buttonDescription}>
              Dive into the periodic table and learn about each element in detail. Discover
              properties, uses, and more.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ReactionPage')}
            >
              <Text style={styles.buttonText}>Reactions</Text>
            </TouchableOpacity>
            <Text style={styles.buttonDescription}>
              Simulate chemical reactions to see how different elements interact and
              visualize their results.
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 60, // Slightly smaller for better text hierarchy
    fontFamily: 'DancingScript-Bold', // Cursive font for elegance
    color: '#2C3E50',
    letterSpacing: 2,
    textAlign: 'center',
  },
  appSubtitle: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium', // Professional, modern font
    color: '#2980B9',
    marginTop: 5,
    textAlign: 'center',
  },
  appDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular', // Clean, readable font
    color: '#7F8C8D',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
    lineHeight: 22,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute buttons evenly
    paddingHorizontal: 1,
    width: '100%',
  },
  infoBox: {
    backgroundColor: '#F5F5F5', // Light background for box
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 7, // Adjusted padding for better layout
    width: '45%', // Adjust each box to take 45% of the space
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980B9',
    paddingVertical: 12, // Reduced padding for a cleaner look
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  buttonDescription: {
    fontSize: 14,
    padding:5,
    color: '#4f4c4c', // Subtle description color
    textAlign:'justify',
    marginTop: 8,
    fontFamily: 'Roboto-Light', // Light and professional font
    lineHeight: 20, // Better spacing between lines
  },
});

export default HomeScreen;
