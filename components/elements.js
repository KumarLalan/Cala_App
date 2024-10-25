import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert, Text, Image  } from 'react-native';
import { getChemicalDetails } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Elements = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [elementDetails, setElementDetails] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm) {
      const result = getChemicalDetails(trimmedSearchTerm);
      setHasSearched(true);

      if (result && Array.isArray(result.output)) {
        setElementDetails(result.output);
      } else {
        setElementDetails(null);
        Alert.alert('Element not found', `No element found for "${trimmedSearchTerm}"`);
      }
    } else {
      Alert.alert('Invalid Search', 'Please enter a valid element name.');
    }
  };

  const renderElementDetails = () => {
    if (!elementDetails) {
      return <Text style={styles.errorText}>No element found. Please try again.</Text>;
    }

    return (
      <View style={styles.cardContainer}>
        {elementDetails.map((detail, index) => {
          if (detail.split(": ")[1].trim()) {
            const [label, value] = detail.split(": ");
            return (
              <View key={index} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{label}</Text>
                <Text style={styles.detailValue}>{value}</Text>
              </View>
            );
          }
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('./arrow.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Element Explorer</Text>
      </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for an element..."
            placeholderTextColor="#B0B0B0"
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {elementDetails && renderElementDetails()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD', // Softer off-white background for a professional look
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    marginRight: 15,
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: '#2C3E50',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ECECEC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2, // Subtle elevation to give input box a floating feel
  },
  iconButton: {
    padding: 15,
    backgroundColor: '#3498DB', // Sleek blue for action buttons
    borderRadius: 25,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3498DB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Higher elevation for button to give depth
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF', // Clean white card background
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6, // Soft shadow for depth
    borderLeftWidth: 5,
    borderLeftColor: '#3498DB', // Blue left border to highlight card
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 10,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#34495E',
  },
  errorText: {
    fontSize: 18,
    color: '#E74C3C',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Elements;
