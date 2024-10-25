import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';

const API_KEY = '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';

const Reaction = ({ navigation }) => {
  const [reactant1, setReactant1] = useState('');
  const [reactant2, setReactant2] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const simulateReaction = async () => {
    if (!reactant1 || !reactant2) return;

    setLoading(true);
    setError(null);

    const prompt = `
      Simulate a chemical reaction between ${reactant1} and ${reactant2}. Provide the following information:
      1. Reaction equation
      2. Reactivity level (1-10)
      3. Danger level (1-10)
      4. Resulting compounds
      5. Brief description of the reaction
      6. Any safety precautions

      Format the response as a JSON object with the following keys:
      reaction_equation, reactivity_level, danger_level, resulting_compounds, description, safety_precautions
    `;

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b-32768',
          messages: [
            { role: 'system', content: 'You are a chemistry expert simulating chemical reactions.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 1000,
        }),
      });

      const data = await response.json();

      if (data && data.choices && data.choices[0].message.content) {
        setResult(JSON.parse(data.choices[0].message.content));
      } else {
        setError('Unexpected response format from the API');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to simulate reaction');
    } finally {
      setLoading(false);
    }
  };
  console.log(result)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('./arrow.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Reaction Simulator</Text>
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="reactant1"
          value={reactant1}
          onChangeText={setReactant1}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="reactant2"
          value={reactant2}
          onChangeText={setReactant2}
          placeholderTextColor="#666"
        />
        <TouchableOpacity
          style={styles.simulateButton}
          onPress={simulateReaction}
          disabled={loading || !reactant1 || !reactant2}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.simulateButtonText}>✓</Text>
          )}
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Reaction Results:</Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Reaction Equation: </Text>
            <Text style={styles.resultData}>{result.reaction_equation}</Text>
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Reactivity Level: </Text>
            <Text style={styles.resultData}>{result.reactivity_level}</Text>
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Danger Level: </Text>
            <Text style={styles.resultData}>{result.danger_level}</Text>
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Resulting Compounds: </Text>
            <Text style={styles.resultData}>{result.resulting_compounds}</Text>
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Description: </Text>
            <Text style={styles.resultData}>{result.description}</Text>
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.resultLabel}>Safety Precautions: </Text>
            <Text style={styles.resultData}>{result.safety_precautions}</Text>
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
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
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#AAA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
  },
  simulateButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2E8B57',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2E8B57',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  simulateButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    shadowColor: '#AAA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: '#555',
  },
  resultLabel: {
    fontWeight: 'bold',
    color: '#444',
  },
  resultData: {
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    color: '#E74C3C',
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Reaction;
