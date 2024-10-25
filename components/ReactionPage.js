import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReactionPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const navigation = useNavigation();

  const questionsAndAnswers = [
    {
      question: "What are reactions?",
      answer: "Reactions are processes in which substances interact to form new products. They are fundamental to chemistry and biology.",
    },
    {
      question: "Why should I know about reactions?",
      answer: "Understanding reactions helps in various fields such as chemical engineering, medicine, and environmental science, enabling us to predict and control outcomes.",
    },
    {
      question: "Why this app?",
      answer: "This app provides detailed insights into reactions, making it easier to learn and explore various chemical processes.",
    },
  ];

  const handleQuestionPress = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Reactions</Text>

    <ScrollView contentContainerStyle={styles.questionsContainer}>
      {questionsAndAnswers.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.questionButton}
          onPress={() => handleQuestionPress(index)}
        >
          <Text style={styles.questionText}>
            {selectedQuestion === index ? item.answer : item.question}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Reaction')}
      >
        <Text style={styles.buttonText}>Go Ahead</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'DancingScript-Bold',
  },
  questionsContainer: {
    flexGrow: 1,
    width: '100%',
  },
  questionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  questionText: {
    fontSize: 16,
    color: '#2C3E50',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});

export default ReactionPage;
