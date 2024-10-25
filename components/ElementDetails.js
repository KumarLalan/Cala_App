// src/ElementDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ElementDetails = ({ details }) => {
  if (!details) {
    return <Text style={styles.errorText}>No element found. Please try again.</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      {details.map((detail, index) => {
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

const styles = StyleSheet.create({
  cardContainer: {
    padding: 30,
   
    shadowColor: '#000',
   
    borderColor: '#ddd',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  detailValue: {
    fontSize: 15,
    fontWeight: '400',
    color: '#222',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ElementDetails;
